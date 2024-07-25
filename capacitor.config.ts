import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'fantasia-kids',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    AdMob: {
      appIdAndroid: 'ca-app-pub-3810718851636321~5960669734',
      appIdIOS: 'ca-app-pub-3810718851636321~5960669734', 
    },
  },
};

export default config;