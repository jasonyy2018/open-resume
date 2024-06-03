// src/app/_app.tsx
import { appWithTranslation } from 'next-i18next';
import '../i18n/i18n'; // 导入 i18n 配置
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
