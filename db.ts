// import { NeonDatabase } from 'drizzle-orm/neon-serverless';
// import { drizzle as nodeDrizzle } from 'drizzle-orm/node-postgres';
// import { Pool as NodePool } from 'pg';
//
// import { serverDBEnv } from '@/config/db';
// import { isServerMode } from '@/const/version';
//
// import * as schema from '../../schemas';
//
// // 定义默认值
// const DEFAULT_DATABASE_URL = 'postgres://xchat:xchat@lobe.xxchat.xyz:5432/xchat';
// const DEFAULT_KEY_VAULTS_SECRET = 'tLDZG1xzNvnk0CLiQUWnDTrqrUG1k';
//
// export const getDBInstance = (): NeonDatabase<typeof schema> => {
//   if (!isServerMode) return {} as any;
//
//   // 使用临时变量来代替不直接修改serverDBEnv
//   const keyVaultsSecret = serverDBEnv.KEY_VAULTS_SECRET || DEFAULT_KEY_VAULTS_SECRET;
//
//   // 如果 keyVaultsSecret 为空，则抛出错误
//   if (!keyVaultsSecret) {
//     throw new Error(
//       ` \`KEY_VAULTS_SECRET\` is not set, please set it in your environment variables.
//
// If you don't have it, please run \`openssl rand -base64 32\` to create one.
// `,
//     );
//   }
//
//   // 使用临时变量来代替不直接修改serverDBEnv
//   const connectionString = serverDBEnv.DATABASE_URL || DEFAULT_DATABASE_URL;
//
//   // 如果 connectionString 为空，则抛出错误
//   if (!connectionString) {
//     throw new Error(`You are try to use database, but "DATABASE_URL" is not set correctly`);
//   }
//
//   const client = new NodePool({
//     connectionString,
//     idleTimeoutMillis: 10_000,
//     ssl: false,
//   });
//
//   return nodeDrizzle(client, { schema });
//
//   // if (serverDBEnv.DATABASE_DRIVER === 'node') {
//   //   const client = new NodePool({ connectionString });
//   //   return nodeDrizzle(client, { schema });
//   // }
//   //
//   // if (process.env.MIGRATION_DB === '1') {
//   //   // https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined
//   //   neonConfig.webSocketConstructor = ws;
//   // }
//   //
//   // const client = new NeonPool({ connectionString });
//   // return neonDrizzle(client, { schema });
// };
//
// // console.log('getDBInstance()', getDBInstance());
// export const serverDB = getDBInstance();
