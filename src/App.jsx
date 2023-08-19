import "./App.css";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import UserPosts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<UserPosts />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
}
export default App;
