import Layout from "../layouts";
import "../styles/globals.css";
import Header from "../components/Header";

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Layout>
      <Header />
      <div className="h-[calc(100vh-80px)]">
        <Component {...pageProps} />
      </div>
      </Layout>
    </>
  );
};

export default App;
