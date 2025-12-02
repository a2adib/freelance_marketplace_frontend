import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import toast from 'react-hot-toast';

const UpdateJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const axios = useAxios();
    const queryClient = useQueryClient();

    const getJob = async () => {
        const res = await axios.get(`/jobs/${id}`);
        return res.data;
    }

    const { data: job, isLoading, isError, error } = useQuery({
        queryKey: ['job', id],
        queryFn: getJob,
    });

    const { mutate: updateJob } = useMutation({
        mutationFn: (updatedJob) => {
            return axios.put(`/jobs/${id}`, updatedJob);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['myJobs']);
            queryClient.invalidateQueries(['job', id]);
            toast.success('Job updated successfully');
            navigate('/myAddedJobs');
        },
        onError: (err) => {
            toast.error(err.message);
        }
    });

    const handleUpdateJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const summary = form.summary.value;
        const coverImage = form.coverImage.value;

        const updatedJob = {
            title,
            category,
            summary,
            coverImage,
        };

        updateJob(updatedJob);
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500">{error.message}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">Update Job</h1>
            <div className="max-w-lg mx-auto">
                <form onSubmit={handleUpdateJob} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Job Title" className="input input-bordered" defaultValue={job?.title} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered" defaultValue={job?.category}>
                            <option>Web Development</option>
                            <option>Graphic Design</option>
                            <option>Content Writing</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <textarea name="summary" className="textarea textarea-bordered" placeholder="Job Summary" defaultValue={job?.summary}></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cover Image URL</span>
                        </label>
                        <input type="text" name="coverImage" placeholder="Image URL" className="input input-bordered" defaultValue={job?.coverImage} />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateJob;