import Layout from "../layouts";
import "../styles/globals.css";
import Header from "../components/Header";
import { DataProvider } from "./api/context/context";

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
