import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miapp.dorada',
  appName: 'MiAppDorada',
  webDir: 'www',
  // @ts-expect-error: bundledWebRuntime está permitido aunque no esté tipado
  bundledWebRuntime: false
};

export default config;

