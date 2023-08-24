import { registerUser } from "../API";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const { handleAuthChange } = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  // Navigate to post if login is successful
  const notify = () => toast("Thanks for registering!");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmpassword) {
      return;
    }

    const response = await registerUser(data.username, data.password);

    if (response.success) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);

      handleAuthChange(true, response.data.user);

      navigate("/posts");
    } else {
      toast.error("Please try again");
    }
  };

  return (
    <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <label>Username: </label>
      <input
        {...register("username", {
          required: true,
          minLength: 8,
          maxLength: 15,
        })}
        name="username"
        type="text"
        id="username"
        placeholder="Username"
        aria-invalid={errors.username ? "true" : "false"}
      />
      {errors.username?.type === "required" && <p>Username is required</p>}
      {errors.username?.type <= "minLength" && (
        <p>Username must be at least 8 characters</p>
      )}
      {/* Password Field */}
      <label>Password: </label>
      <input
        {...register("password", {
          required: true,
          minLength: 9,
          maxLength: 15,
        })}
        name="password"
        type="password"
        id="password"
        placeholder="********"
      />
      {errors.password?.type === "required" && <p>Password is required</p>}
      {errors.password?.type <= "minLength" && (
        <p>Password must be at least 9 characters</p>
      )}
      {/* Confirm Password */}
      <label>Confirm Password: </label>
      <input
        {...register("confirmpassword", { required: true })}
        type="password"
        id="password"
        placeholder="********"
      />
      {watch("confirmpassword") !== watch("password") &&
      getValues("confirmpassword") ? (
        <p>Password must match</p>
      ) : null}
      <button onClick={notify}>Register</button>
      <a className="login-register" href="/account/login">
        Already have an account? Log In
      </a>
    </form>
  );
}
