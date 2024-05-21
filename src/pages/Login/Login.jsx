import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const Navigate = useNavigate();
  const location = useLocation();

  const {signIn, loading} = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const from = location.state?.from?.pathname || '/'
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then ( result => {
      
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Logged In successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      })
      Navigate(from, {replace: true});
    })
  
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.current.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-1/2 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                onBlur={handleValidateCaptcha}
                placeholder="type the Recatpcha"
                name="captcha"
                className="input input-bordered"
                required
              />
              <button
                
                className="btn btn-outline mt-2 btn-xs"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">Login</button>
            </div>
          </form>
          <p><small>New Here?</small> <Link to='/signup'>Create an Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
