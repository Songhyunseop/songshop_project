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

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const StyledToastContainer = styled(ToastContainer)`
    .Toastify__toast {
      background-color: #403234;
      opacity: 0.93;
      border-radius: 3px;
    }

    .Toastify__toast-body {
      font-size: 1.2rem;
      font-weight: 400;
      color: #f3f3f3;

      > div {
        font-weight: 500;
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .Toastify__progress-bar-theme--light {
      border: 3px solid #b8a7a9;
    }
  `;

  return (
    <>
      <QueryClientProvider client={client}>
        <RecoilRoot>
          <AuthProvier />
          <Global styles={globalStyle} />
          <Layout>
            <Component {...pageProps} />
            <StyledToastContainer limit={1} containerId='default' />
          </Layout>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
