import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { registerWithEmailPassword, setUser, handleGoogleSignin } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    if (pass.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!uppercase.test(pass)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!lowercase.test(pass)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    const registrationPromise = registerWithEmailPassword(email, pass)
      .then((userCredential) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        }).then(() => {
          setUser({ ...userCredential.user, displayName: name, photoURL: photoUrl });
          return userCredential;
        });
      });

    toast.promise(registrationPromise, {
      loading: 'Registering...',
      success: <b>Registration successful!</b>,
      error: (err) => <b>{err.message || "Registration failed."}</b>,
    });
  };

  const googleSignUp = () => {
    handleGoogleSignin()
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully signed in with Google!");
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
                <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photoUrl"
                    type="text"
                    placeholder="Enter your photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
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
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <span className="absolute top-9 right-6 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <label className="label">
                    <Link to="/forget/none" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
              <div className="divider">OR</div>
              <button onClick={googleSignUp} className="btn btn-outline btn-primary">
                <FcGoogle size={24} />
                Continue with Google
              </button>
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <Link to="/login" className="link link-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;