import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/header";
import "./index.css";
import Home from "./pages/home/home";
import Search from "./pages/search/search";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          exact
          element={<Navigate to={"/home"} replace={true}></Navigate>}
        ></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="search" element={<Search></Search>}></Route>
      </Routes>
    </>
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <h1 className="text-4xl font-bold text-blue-500">Hello!!</h1>
    // </div>
  );
}

export default App;
