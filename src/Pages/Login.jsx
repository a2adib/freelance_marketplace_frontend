import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { setUser, handleGoogleSignin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentEmail = e.target.email.value;
    const pass = e.target.password.value;

    const loginPromise = signInWithEmailAndPassword(auth, currentEmail, pass)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate(location.state?.from || '/');
        return userCredential;
      });

    toast.promise(loginPromise, {
      loading: 'Logging in...',
      success: <b>Logged in successfully!</b>,
      error: (err) => <b>{err.message || "Login failed."}</b>,
    });
  };

  const handleForget = () => {
    navigate(`/forget/${email}`);
  };

  const googleSignIn = () => {
    handleGoogleSignin()
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully signed in with Google!");
        navigate(location.state?.from || '/');
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Google sign-in failed.");
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    className="input input-bordered"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered"
                    placeholder="Password"
                    required
                  />
                  <span className="absolute top-9 right-6 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <label className="label">
                    <button type="button" onClick={handleForget} className="label-text-alt link link-hover">
                      Forgot password?
                    </button>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="divider">OR</div>
              <button onClick={googleSignIn} className="btn btn-outline btn-primary">
                <FcGoogle size={24} />
                Continue with Google
              </button>
              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="link link-primary">
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;