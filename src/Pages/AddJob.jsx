import React, { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const AddJob = () => {
    const { user } = useContext(AuthContext);
    const axios = useAxios();
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: (newJob) => {
            return axios.post('/jobs', newJob);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['jobs']);
            toast.success('Job added successfully');
            document.getElementById('add-job-form').reset();
        },
        onError: (err) => {
            toast.error(err.message);
        }
    });

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
            postedDate: new Date(),
        };

        mutate(newJob);
    }

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">Add a New Job</h1>
            <div className="max-w-lg mx-auto">
                <form id="add-job-form" onSubmit={handleAddJob} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Job Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Posted By</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" readOnly defaultValue={user?.displayName} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="text" placeholder="Your Email" className="input input-bordered" readOnly defaultValue={user?.email} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered">
                            <option>Web Development</option>
                            <option>Graphic Design</option>
                            <option>Content Writing</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <textarea name="summary" className="textarea textarea-bordered" placeholder="Job Summary"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cover Image URL</span>
                        </label>
                        <input type="text" name="coverImage" placeholder="Image URL" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;