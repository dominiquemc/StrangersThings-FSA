import { Link } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Nav() {
  const { isLoggedIn } = useAuth();

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

          {isLoggedIn ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/account/login">Login</Link>
              </li>
              <li>
                <Link to="/account/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
