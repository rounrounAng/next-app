import '../styles/globals.css'
import { getRenderData } from '../api/mock'
import { useMount } from 'ahooks';
import Router, { useRouter } from 'next/router';
import AppContext from '../components/context';
import { redirect } from 'next/dist/server/api-utils';
function MyApp({ Component, pageProps, footerData }: any) {
  const router = useRouter();
  useMount(() => {
    if (footerData?.pages && footerData?.pages.length > 0) {
      router.push(`/${router.asPath}/${footerData?.pages[0].pageKey}`);
    }
  })
  return <AppContext.Provider value={footerData}><Component {...pageProps} /></AppContext.Provider>
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  ///render/company/eff08/app/1243/qa/page
  const reg = /\/render\/company\/eff08\/app\/[a-z0-9]*\/qa\/page/g;
  const pathname = ctx.req.url
  const isRender = reg.test(pathname);
  let footerData = {};
  if (isRender) {
    footerData = await getRenderData();
  }

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, footerData };
};
export default MyApp
