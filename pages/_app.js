import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { basePath } from '../settings';
import '../styles/index.less';
import { useViewport } from '../utils/index';

const BREAK_POINT = 720;

function App({ Component, pageProps }) {
  const router = useRouter();
  const { route } = router;
  const path = route.split('/');
  const subTitle = path[1];
  const blackList = ['/', '/home'];
  const useLayout = !blackList.includes(route);
  const { width } = useViewport();
  const isMobile = width < BREAK_POINT;

  const props = {
    ...pageProps,
    router,
    isMobile
  };

  return (
    <>
      <Head>
        <title>{subTitle ? `${subTitle} | ` : null}Interest</title>
        <meta name="description" content="Record every interesting case" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      {useLayout ? (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      ) : (
        <Component {...props} />
      )}
    </>
  );
}

export default App;
