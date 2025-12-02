import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                toast.success("Successfully logged out!");
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/myprofile">My Profile</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">SkillSwap</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                    <div className="flex items-center gap-2">
                        {
                            !user && <Link to="/login" className="btn btn-primary">Login</Link>
                        }
                    
                        {
                            user && <button onClick={handleSignOut} className="btn btn-primary">Logout</button>
                        }
                    </div>
            </div>
        </div>
    );
};

export default Navbar;