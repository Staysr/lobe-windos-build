'use client';

import { type AuthorizationPhase, type AuthorizationProgress } from '@lobechat/electron-client-ipc';
import { useWatchBroadcast } from '@lobechat/electron-client-ipc';
import { Alert, Button, Center, Flexbox, Text } from '@lobehub/ui';
import { cssVar } from 'antd-style';
import { Cloud, Undo2Icon } from 'lucide-react';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import urlJoin from 'url-join';

import { OFFICIAL_SITE } from '@/const/url';
import { isDesktop } from '@/const/version';
import UserInfo from '@/features/User/UserInfo';
import { remoteServerService } from '@/services/electron/remoteServer';
import { electronSystemService } from '@/services/electron/system';
import { useElectronStore } from '@/store/electron';
import { setDesktopAutoOidcFirstOpenHandled } from '@/utils/electron/autoOidc';

import LobeMessage from '../components/LobeMessage';

const LEGACY_LOCAL_DB_MIGRATION_GUIDE_URL = urlJoin(
  OFFICIAL_SITE,
  '/docs/usage/migrate-from-local-database',
);

// 默认服务器地址
const DEFAULT_ENDPOINT = 'https://lobe.xxchat.xyz';

// 登录状态类型
type LoginStatus = 'idle' | 'loading' | 'success' | 'error';

const authorizationPhaseI18nKeyMap: Record<AuthorizationPhase, string> = {
  browser_opened: 'screen5.auth.phase.browserOpened',
  cancelled: 'screen5.actions.cancel',
  verifying: 'screen5.auth.phase.verifying',
  waiting_for_auth: 'screen5.auth.phase.waitingForAuth',
};

interface LoginStepProps {
  onBack: () => void;
  onNext: () => void;
}

const LoginStep = memo<LoginStepProps>(({ onBack, onNext }) => {
  const { t } = useTranslation('desktop-onboarding');

  const [loginStatus, setLoginStatus] = useState<LoginStatus>('idle');
  const [authProgress, setAuthProgress] = useState<AuthorizationProgress | null>(null);
  const [remoteError, setRemoteError] = useState<string | null>(null);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [hasLegacyLocalDb, setHasLegacyLocalDb] = useState(false);
  const [localRemainingSeconds, setLocalRemainingSeconds] = useState<number | null>(null);

  const [
    dataSyncConfig,
    isConnectingServer,
    remoteServerSyncError,
    useDataSyncConfig,
    connectRemoteServer,
    refreshServerConfig,
    clearRemoteServerSyncError,
    disconnectRemoteServer,
  ] = useElectronStore((s) => [
    s.dataSyncConfig,
    s.isConnectingServer,
    s.remoteServerSyncError,
    s.useDataSyncConfig,
    s.connectRemoteServer,
    s.refreshServerConfig,
    s.clearRemoteServerSyncError,
    s.disconnectRemoteServer,
  ]);

  useDataSyncConfig();

  useEffect(() => {
    if (!isDesktop) return;

    let mounted = true;
    electronSystemService
      .hasLegacyLocalDb()
      .then((value) => {
        if (mounted) setHasLegacyLocalDb(value);
      })
      .catch(() => undefined);

    return () => {
      mounted = false;
    };
  }, []);

  const isAuthed = !!dataSyncConfig?.active && dataSyncConfig.storageMode === 'selfHost';

  // 判断是否可以开始使用
  const canStart = () => {
    return isAuthed || loginStatus === 'success';
  };

  // 处理登录
  const handleLogin = async () => {
    if (!isDesktop) {
      setRemoteError(t('screen5.errors.desktopOnlyOidc'));
      setLoginStatus('error');
      return;
    }

    setRemoteError(null);
    clearRemoteServerSyncError();
    setLoginStatus('loading');
    setDesktopAutoOidcFirstOpenHandled();

    await connectRemoteServer({
      remoteServerUrl: DEFAULT_ENDPOINT,
      storageMode: 'selfHost'
    });
  };

  // 退出登录
  const handleSignOut = async () => {
    if (isSigningOut) return;

    setIsSigningOut(true);
    setRemoteError(null);
    clearRemoteServerSyncError();

    try {
      await disconnectRemoteServer();
      await refreshServerConfig();
    } finally {
      setLoginStatus('idle');
      setIsSigningOut(false);
    }
  };

  // 同步登录状态
  useEffect(() => {
    if (isAuthed) setLoginStatus('success');
  }, [isAuthed]);

  // 显示错误信息
  useEffect(() => {
    const message = remoteServerSyncError?.message;
    if (!message) return;
    setRemoteError(message);
    if (loginStatus === 'loading') setLoginStatus('error');
  }, [remoteServerSyncError?.message, loginStatus]);

  // 监听授权成功
  useWatchBroadcast('authorizationSuccessful', async () => {
    setRemoteError(null);
    clearRemoteServerSyncError();
    setAuthProgress(null);
    await refreshServerConfig();
  });

  // 监听授权失败
  useWatchBroadcast('authorizationFailed', ({ error }) => {
    setRemoteError(error);
    setAuthProgress(null);
    if (loginStatus === 'loading') setLoginStatus('error');
  });

  // 监听授权进度
  useWatchBroadcast('authorizationProgress', (progress) => {
    setAuthProgress(progress);
    if (progress.phase === 'cancelled') {
      setLoginStatus('idle');
      setAuthProgress(null);
    }
  });

  // 同步倒计时
  useEffect(() => {
    if (authProgress) {
      const seconds = Math.max(
        0,
        Math.ceil((authProgress.maxPollTime - authProgress.elapsed) / 1000),
      );
      setLocalRemainingSeconds(seconds);
    } else {
      setLocalRemainingSeconds(null);
    }
  }, [authProgress]);

  // 倒计时
  useEffect(() => {
    if (localRemainingSeconds === null || localRemainingSeconds <= 0) return;

    const timer = setTimeout(() => {
      setLocalRemainingSeconds((prev) => {
        if (prev === null || prev <= 0) return prev;
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [localRemainingSeconds]);

  // 取消授权
  const handleCancelAuth = async () => {
    setRemoteError(null);
    clearRemoteServerSyncError();
    setLoginStatus('idle');
    setAuthProgress(null);
    await remoteServerService.cancelAuthorization();
  };

  // 渲染登录内容
  const renderLoginContent = () => {
    // 成功状态
    if (loginStatus === 'success') {
      return (
        <Flexbox gap={16} style={{ width: '100%' }}>
          <Alert
            description={t('authResult.success.desc')}
            style={{ width: '100%' }}
            title={t('authResult.success.title')}
            type={'success'}
          />
          <UserInfo
            style={{
              background: cssVar.colorFillSecondary,
              borderRadius: 8,
            }}
          />
          <Button
            block
            disabled={isSigningOut || isConnectingServer}
            icon={Cloud}
            size={'large'}
            type={'default'}
            onClick={handleSignOut}
          >
            {isSigningOut ? t('screen5.actions.signingOut') : t('screen5.actions.signOut')}
          </Button>
        </Flexbox>
      );
    }

    // 错误状态
    if (loginStatus === 'error') {
      const errorMessage = remoteError?.toLowerCase().includes('timed out')
        ? t('screen5.errors.timedOut')
        : remoteError || t('authResult.failed.desc');

      return (
        <Flexbox gap={16} style={{ width: '100%' }}>
          <Alert
            description={errorMessage}
            title={t('authResult.failed.title')}
            type={'secondary'}
          />
          <Button
            block
            icon={Cloud}
            size={'large'}
            type={'primary'}
            onClick={() => setLoginStatus('idle')}
          >
            {t('screen5.actions.tryAgain')}
          </Button>
        </Flexbox>
      );
    }

    // 加载状态
    if (loginStatus === 'loading') {
      const phaseText = t(authorizationPhaseI18nKeyMap[authProgress?.phase ?? 'browser_opened'], {
        defaultValue: t('screen5.actions.signingIn'),
      });

      return (
        <Flexbox gap={8} style={{ width: '100%' }}>
          <Button block disabled={true} icon={Cloud} loading={true} size={'large'} type={'primary'}>
            {t('screen5.actions.signingIn')}
          </Button>
          <Text style={{ color: cssVar.colorTextDescription }} type={'secondary'}>
            {phaseText}
          </Text>
          <Flexbox horizontal align={'center'} justify={'space-between'}>
            {localRemainingSeconds !== null ? (
              <Text style={{ color: cssVar.colorTextDescription }} type={'secondary'}>
                {t('screen5.auth.remaining', {
                  time: localRemainingSeconds,
                })}
              </Text>
            ) : (
              <div />
            )}
            <Button size={'small'} type={'text'} onClick={handleCancelAuth}>
              {t('screen5.actions.cancel')}
            </Button>
          </Flexbox>
        </Flexbox>
      );
    }

    // 初始状态 - 显示登录按钮
    return (
      <Button
        block
        disabled={isConnectingServer}
        icon={Cloud}
        loading={false}
        size={'large'}
        type={'primary'}
        onClick={handleLogin}
      >
        {t('screen5.actions.signInCloud')}
      </Button>
    );
  };

  return (
    <Center gap={32} style={{ height: '100%', minHeight: '100%' }}>
      <Flexbox align={'flex-start'} justify={'flex-start'} style={{ width: '100%' }}>
        <LobeMessage sentences={[t('screen5.title'), t('screen5.title2'), t('screen5.title3')]} />
        <Text as={'p'}>{t('screen5.description')}</Text>
      </Flexbox>

      <Flexbox align={'flex-start'} gap={16} style={{ width: '100%' }} width={'100%'}>
        {renderLoginContent()}

        <Flexbox horizontal justify={'center'} style={{ width: '100%' }}>
          {hasLegacyLocalDb && (
            <Button
              style={{ padding: 0 }}
              type={'link'}
              onClick={() =>
                electronSystemService.openExternalLink(LEGACY_LOCAL_DB_MIGRATION_GUIDE_URL)
              }
            >
              {t('screen5.legacyLocalDb.link', 'Migrate legacy local database')}
            </Button>
          )}
        </Flexbox>
      </Flexbox>

      {canStart() && (
        <Flexbox horizontal justify={'space-between'} style={{ marginTop: 32 }}>
          <Button
            icon={Undo2Icon}
            style={{ color: cssVar.colorTextDescription }}
            type={'text'}
            onClick={onBack}
          >
            {t('back')}
          </Button>
          <Button type={'primary'} onClick={onNext}>
            {t('screen5.navigation.next')}
          </Button>
        </Flexbox>
      )}
    </Center>
  );
});

LoginStep.displayName = 'LoginStep';

export default LoginStep;
