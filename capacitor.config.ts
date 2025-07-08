import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miapp.dorada',
  appName: 'MiAppDorada',
  webDir: 'www',
  // @ts-expect-error: bundledWebRuntime está permitido aunque no esté tipado
  bundledWebRuntime: false,
  server: {
    androidScheme: 'http'  // ✅ Necesario para cargar archivos locales en Android
  }
};

export default config;
