import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  // interface IFormInput {
  //   firstName: string
  //   lastName: string
  //   age: number
  // }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-1/2 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                name="name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-400">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-400">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })}
                className="input input-bordered"
                required
              />
              {errors.password?.type === "required" && (
                <span className="text-red-400">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-400">
                  Password must be 6 character,
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-400">
                  Password must be one uppercase, one lowercase, one number and
                  one special character.
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="SIGN UP"
              />
            </div>
          </form>
        <div className="px-4">
        <p>
            <small>Already have an Account?</small>{" "}
            <Link to="/login">Go To Login</Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
