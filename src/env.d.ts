/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_SERVER_FILE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
