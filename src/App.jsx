import "./App.css";
import UserPosts from "./components/Posts";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <h1>Strangers Things</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/account/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<UserPosts />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
