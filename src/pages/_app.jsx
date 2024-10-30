import Layout from "../layouts";
import "../styles/globals.css";
import { DataProvider } from "./api/context/context";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  );
};

export default App;
