import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import globalStyle from '@/commons/styles/globals';

// fontawesome 이미지 css 미적용 오류 해결방안 코드 (SSR 이슈)
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}
