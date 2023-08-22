import "./App.css";
import UserPosts from "./components/Posts";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import MakePost from "./components/MakePost";
import UpdatePost from "./components/UpdatePost";
import { AuthProvider } from "./components/Auth";
import Nav from "./components/Nav";
import Logout from "./components/Logout";

// import { useEffect } from "react";

function App() {
  // const [username, setUsername] = useState("")
// >>>>>>> post-reg-dc

  return (
<AuthProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<UserPosts />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/makepost" element={<MakePost />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;

// changing nav upon login
// success/error messages
