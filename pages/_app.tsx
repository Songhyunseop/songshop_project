import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import globalStyle from '@/commons/styles/globals';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// fontawesome 이미지 css 미적용 오류 해결방안 코드 (SSR 이슈)
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Layout from '@/components/commons/layout/layout';
import { RecoilRoot } from 'recoil';
import AuthProvier from '@/components/commons/auth/auth';

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  console.log('렌더링');

  return (
    <>
      <QueryClientProvider client={client}>
        <RecoilRoot>
          <AuthProvier />
          <Global styles={globalStyle} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
