import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Services from "./Pages/Services/Services";
import Signup from '../src/Pages/Login/Signup'
import Blogs from '../src/Pages/Blogs'
import About from "./Pages/About";
import Header from "./Pages/Shared/Header";
import CheckOut from "./Pages/CheckOut";
import RequireRoute from "./Pages/Shared/RequireRoute";
import PageNotFound from "./Pages/PageNotFound";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/checkout" element={<RequireRoute><CheckOut></CheckOut></RequireRoute>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
