import Layout from "../layouts";
import "../styles/globals.css";
import Header from "../components/Header";
import { DataProvider } from "./api/context/context";
// import Home from "./home";
// import Page from ".";

// "h-[calc(100vh-80px)]
const App = ({ Component, pageProps }) => {
  return (
    <>
      <DataProvider>
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
};

export default App;
