import Layout from "../layouts";
import "../styles/globals.css";
import { useEffect } from "react";
// import "react-toastify/dist/ReactToastify.min.css";

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
