import type { AppProps } from 'next/app'
import { Layout } from "@/page-components/layout";
import { ThemeProvider } from 'styled-components';
import { Theme } from "@/styled/theme";


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
