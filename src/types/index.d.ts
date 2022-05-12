
export {};

declare global {
  interface Window {
    ethereum : any
    web3 : any
    Buffer : any
   
  }
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