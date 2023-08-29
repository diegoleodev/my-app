import '@/styles/globals.css'
import '@/Layout/css/layout.css'


import '@/pages/components/projetos/css/pag-projetos.css'
import '@/pages/components/pagHome/css/pag-home.css'
import '@/pages/components/component-theme/css/toogle-theme.css'
import '@/pages/components/linksMobile/linksMobile.css'

import type { AppProps } from 'next/app'
import DashboardLayout from '@/Layout/layout'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <DashboardLayout>
       <Component {...pageProps} />
    </DashboardLayout>
  ) 
}
