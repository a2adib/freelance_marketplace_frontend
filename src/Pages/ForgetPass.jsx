import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router-dom";
import auth from "../firebase/firebase.config";
import toast from 'react-hot-toast';

const ForgetPass = () => {
    const { email } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formEmail = e.target.email.value;

        const resetPromise = sendPasswordResetEmail(auth, formEmail)
            .then(() => {
                window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
            });

        toast.promise(resetPromise, {
            loading: 'Sending reset email...',
            success: <b>Password reset email sent! Please check your inbox.</b>,
            error: (err) => <b>{err.message || "Failed to send reset email."}</b>,
        });
    };

    return (
        <div className="flex justify-center items-center my-10 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h1 className="text-3xl font-bold text-center mb-4">Reset Password</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                                defaultValue={email}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;