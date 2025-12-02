import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Replace with actual authentication state
    const isLoggedIn = false; 
    const user = {
        displayName: 'John Doe',
        photoURL: 'https://via.placeholder.com/40'
    };

    return (
        <nav className="bg-base-100 shadow-md">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Freelance Marketplace</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/allJobs">All Jobs</Link></li>
                        {isLoggedIn && (
                            <>
                                <li><Link to="/addJob">Add a Job</Link></li>
                                <li><Link to="/my-accepted-tasks">My Accepted Tasks</Link></li>
                            </>
                        )}
                    </ul>
                    {isLoggedIn ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li className="p-2">
                                    <span className="font-bold">{user.displayName}</span>
                                </li>
                                <li><button onClick={() => alert('Logout clicked!')}>Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <Link to="/login" className="btn btn-ghost">Login</Link>
                            <Link to="/register" className="btn btn-primary">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;