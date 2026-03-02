'use client';

import { BRANDING_NAME } from '@lobechat/business-const';
import { Flexbox, Form } from '@lobehub/ui';
import { Divider } from 'antd';
import { createStaticStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PRIVACY_URL, TERMS_URL } from '@/const/url';

import AboutList from './AboutList';
import ItemLink from './ItemLink';
import Version from './Version';

const styles = createStaticStyles(({ css, cssVar }) => ({
  title: css`
    font-size: 14px;
    font-weight: bold;
    color: ${cssVar.colorTextSecondary};
  `,
}));

const About = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { t } = useTranslation('common');

  return (
    <Form.Group
      collapsible={false}
      gap={16}
      style={{ maxWidth: '1024px', width: '100%' }}
      title={`${t('about')} ${BRANDING_NAME}`}
      variant={'filled'}
    >
      <Flexbox gap={20} paddingBlock={20} width={'100%'}>
        <div className={styles.title}>{t('version')}</div>
        <Version mobile={mobile} />
        <Divider style={{ marginBlock: 0 }} />
        <div className={styles.title}>{t('contact')}</div>
        <Divider style={{ marginBlock: 0 }} />
        <div className={styles.title}>{t('information')}</div>
        <Divider style={{ marginBlock: 0 }} />
        <div className={styles.title}>{t('legal')}</div>
        <AboutList
          ItemRender={ItemLink}
          items={[
            {
              href: TERMS_URL,
              label: t('terms'),
              value: 'terms',
            },
            {
              href: PRIVACY_URL,
              label: t('privacy'),
              value: 'privacy',
            },
          ]}
        />
      </Flexbox>
    </Form.Group>
  );
});

export default About;
