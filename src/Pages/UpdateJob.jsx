import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';


const UpdateJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]); 
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/jobs')
    .then(res=>{
        setJobs(res.data);
        setLoading(false);
    })
    .catch(err=>{
        console.log(err);
        setLoading(false);
    })
}, []);
    

    const job = jobs.find(j => j._id === id);

    const handleUpdateJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const summary = form.summary.value;
        const coverImage = form.coverImage.value;

        const updatedJob = {
            ...job,
            title,
            category,
            summary,
            coverImage,
        };

        axios.put(`http://localhost:3000/update/${id}`, updatedJob)
        .then(res => {
            console.log('Job updated successfully:', res.data);
            toast.success('Job updated successfully!');
            navigate('/myAddedJobs');
        })
        .catch(err => {
            console.log('Error updating job:', err);    
            toast.error('Error updating job!');
        });
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader size={50} color={"#123abc"} loading={loading} />
            </div>
        );
    }

    if (!job) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Job not found.</p>
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