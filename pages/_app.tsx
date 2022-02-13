import '../styles/globals.css'
import { getRenderData } from '../api/mock'
import { useMount } from 'ahooks';
import Router from 'next/router';
import AppContext from '../components/context';
function MyApp({ Component, pageProps, footerData }: any) {
  useMount(() => {
    if (footerData?.pages.length > 0) {
      Router.push(`/${footerData?.pages[0].pageKey}`);
    }
  })
  return <AppContext.Provider value={footerData}><Component {...pageProps} /></AppContext.Provider>
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const footerData = await getRenderData();
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, footerData };
};
export default MyApp
