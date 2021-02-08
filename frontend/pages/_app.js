import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/styles/nprogress.css';

import Layout from '../components/layout';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const CustomApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default CustomApp;
