import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://freelance-marketplace-backend.vercel.app/jobs?category=${category}`)
            .then((res) => {
                setJobs(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("Fetch error:", err);
                setLoading(false);
            });
    }, [category]);

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">All Jobs</h1>
            <div className="text-center mb-4">
                <select 
                    onChange={(e) => setCategory(e.target.value)}
                    defaultValue="Choose Category"
                    className="select select-bordered w-full max-w-xs"
                >
                    <option disabled={true}>Choose Category</option>
                    <option value="">All</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Video Editing">Video Editing</option>
                </select>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <ClipLoader size={50} color={"#123abc"} loading={loading} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <div key={job._id} className="card bg-base-100 shadow-xl">
                            {job.coverImage && (
                                <figure>
                                    <img src={job.coverImage} alt={job.title} className="h-48 w-full object-cover" />
                                </figure>
                            )}
                            <div className="card-body">
                                <h2 className="card-title">{job.title}</h2>
                                <p><strong>Category:</strong> {job.category}</p>
                                <p><strong>Posted By:</strong> {job.postedBy}</p>
                                <p className="text-sm text-gray-500">{job.summary}</p>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/JobDetails/${job._id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllJobs;