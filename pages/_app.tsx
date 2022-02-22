import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { Layout } from "@/page-components/layout";
import { Theme } from "@/styled/theme";
import { Provider } from '@/store/tracked';
import { AnimatePresence } from 'framer-motion';


function MyApp({ Component, pageProps, router }: AppProps) {
  
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Provider>
          <AnimatePresence exitBeforeEnter
            initial={false} 
            onExitComplete={() => window.scrollTo(0, 0)}>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </Provider>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
