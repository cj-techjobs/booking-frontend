import Layout from "../layouts";
import "../styles/globals.css";
import { useEffect } from "react";
import Header from "../components/Header";
// import "react-toastify/dist/ReactToastify.min.css";

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
