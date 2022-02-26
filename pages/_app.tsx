import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { Layout } from "@/page-components/layout";
import { Theme } from "@/styled/theme";
import { Provider } from '@/store/tracked';
import { MotionConfig } from 'framer-motion';


function MyApp({ Component, pageProps, router }: AppProps) {
  
  return (
    <ThemeProvider theme={Theme}>
      <MotionConfig reducedMotion="user">
        <Layout>
          <Provider>
            <Component {...pageProps} key={router.route}/>
          </Provider>
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default MyApp
