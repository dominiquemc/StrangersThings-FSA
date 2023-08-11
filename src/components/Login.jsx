export default function Login() {
  return (
    <div className="loginForm">
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" />

        <label>Password: </label>
        <input type="password" />

        <button>Log In</button>
        <a href="/account/register">Don't have an account? Sign Up</a>
      </form>
    </div>
  );
}
