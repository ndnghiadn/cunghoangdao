import '../styles/globals.css'
import 'antd/dist/antd.css'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ showSpinner: false })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        
      </Head>
      <Component {...pageProps} />
    </>
  )
}