import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const AddJob = () => {
    const { user } = useContext(AuthContext);

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const summary = form.summary.value;
        const coverImage = form.coverImage.value;
        const postedBy = user.displayName;
        const userEmail = user.email;

        const newJob = {
            title,
            category,
            summary,
            coverImage,
            postedBy,
            userEmail,
        };

        console.log(newJob);
        axios.post('https://freelance-marketplace-backend.vercel.app/jobs', newJob)
        e.target.reset()
    }

    return (
        <div className="container mx-auto my-12 p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Add a New Job</h1>
            <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-xl bg-base-100">
                <form id="add-job-form" onSubmit={handleAddJob} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name="title" placeholder="e.g., Web Developer, Graphic Designer" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <select name="category" className="select select-bordered w-full" required>
                                <option disabled selected>Select a category</option>
                                <option>Web Development</option>
                                <option>Graphic Design</option>
                                <option>Content Writing</option>
                                <option>Digital Marketing</option>
                                <option>Video Editing</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Posted By</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full" readOnly defaultValue={user?.displayName} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" className="input input-bordered w-full" readOnly defaultValue={user?.email} />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Summary</span>
                        </label>
                        <textarea name="summary" className="textarea textarea-bordered h-24 w-full" placeholder="Provide a brief summary of the job requirements and responsibilities." required></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cover Image URL</span>
                        </label>
                        <input type="text" name="coverImage" placeholder="e.g., https://example.com/job-image.jpg" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">Add Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;