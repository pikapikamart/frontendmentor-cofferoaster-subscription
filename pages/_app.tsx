import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { Layout } from "@/page-components/layout";
import { Theme } from "@/styled/theme";
import { Provider } from '@/store/tracked';


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
