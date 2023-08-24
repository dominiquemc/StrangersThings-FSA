import "./App.css";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import UserPosts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/Profile";
import Logout from "./components/Logout";
import MyPosts from "./components/MyPosts";
import MakePost from "./components/MakePost";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<UserPosts />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/profile" element={<MyPosts />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/makepost"
          element={<MakePost posts={posts} setPosts={setPosts} />}
        />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
}
export default App;

