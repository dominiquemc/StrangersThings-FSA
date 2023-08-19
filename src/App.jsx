import "./App.css";
import UserPosts from "./components/Posts";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Link, Routes, Route } from "react-router-dom";
import { registerUser } from "./API";
import MakePost from "./components/MakePost";
// import { useEffect } from "react";

function App() {
  // const [username, setUsername] = useState("")
// >>>>>>> post-reg-dc

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

          {registerUser && (
            <li>
              <Link to="/account/login">Profile</Link>
            </li>
          )}

          {registerUser && (
            <li>
              <Link to="/account/login">Logout</Link>
            </li>
          )}
            {registerUser && (
            <li>
              <Link to="/makepost">NewPost</Link>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<UserPosts />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/makepost" element={<MakePost />} />
      </Routes>
    </>
  );
}
export default App;

// changing nav upon login
// success/error messsages
