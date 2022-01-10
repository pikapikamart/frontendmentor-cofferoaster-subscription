import type { AppProps } from 'next/app'
import { Layout } from "@/page-components/layout";
import { ThemeProvider } from 'styled-components';
import { Theme } from "@/styled/theme";


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Layout>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
