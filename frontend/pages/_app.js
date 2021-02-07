import Layout from '../components/layout';

const CustomApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default CustomApp;
