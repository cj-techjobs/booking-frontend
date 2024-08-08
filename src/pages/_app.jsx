import Layout from "../layouts";
import "../styles/globals.css";
import Header from "../components/Header";
// import Home from "./home";
// import Page from ".";

// "h-[calc(100vh-80px)]
const App = ({ Component, pageProps }) => {

  return (
    <>
      <Layout>
      <Header />
      <div className="">
        <Component {...pageProps} />
      </div>
      </Layout>
    </>
  );
};

export default App;
