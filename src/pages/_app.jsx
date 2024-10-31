import Header from "../components/bikeComponents/Header/Header";
import Layout from "../layouts";
import "../styles/globals.css";
import { DataProvider } from "./api/context/context";
import { ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DataProvider>
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
        <ToastContainer /> 
      </DataProvider>
    </>
  );
};

export default App;
