export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
          GITHUB_AUTH_TOKEN: string;
          NODE_ENV: 'development' | 'production';
          ENV: 'test' | 'dev' | 'prod';
          PORT?: string;
          PWD: string;
        }
      }
}