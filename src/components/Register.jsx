import { registerUser } from "../API";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => registerUser(data.username, data.password);

  return (
    <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
      <label>Username: </label>
      <input
        {...register("username", {
          required: true,
          minLength: 8,
          maxLength: 15,
        })}
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
        type="password"
        id="password"
        placeholder="********"
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password?.type === "required" && (
        <p role="alert">Password is required</p>
      )}
      {errors.password?.type <= "minLength" && (
        <p>Password must be at least 9 characters</p>
      )}
      {/* Confirm Password */}
      <label>Confirm Password: </label>
      <input
        {...register("confirmpassword", { required: true })}
        id="passwordr"
        type="password"
        placeholder="********"
        aria-invalid={errors.confirmpassword ? "true" : "false"}
      />
      {watch("confirmpassword") !== watch("password") &&
      getValues("confirmpassword") ? (
        <p>Password must match</p>
      ) : null}
      <button>Register</button>
    </form>
  );
}
