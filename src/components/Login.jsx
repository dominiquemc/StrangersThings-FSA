import { useNavigate } from "react-router-dom";
import { loginUser } from "../API";
import { useForm } from "react-hook-form";
import { useAuth } from "./Auth";

export default function Login() {
  const { handleAuthChange } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await loginUser(data.username, data.password);

    if (response.success) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);

      handleAuthChange(true);
      navigate("/posts");
    } else {
      alert("Login failed");
      handleAuthChange(false);
    }
  };
  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <label>Username: </label>
      <input
        {...register("username", {
          required: true,
        })}
        type="text"
        id="username"
        placeholder="Username"
      />
      {errors.username?.type === "required" && <p>Username is required</p>}

      {/* Password Field */}
      <label>Password: </label>
      <input
        {...register("password", {
          required: true,
        })}
        type="password"
        id="password"
        placeholder="********"
      />
      {errors.password?.type === "required" && <p>Password is required</p>}

      <button>Login</button>
      <a className="login-register" href="/account/register">
        Don't have an account? Register
      </a>
    </form>
  );
}
