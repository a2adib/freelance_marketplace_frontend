import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:3000/jobs?category=${category}`)
            .then((res) => {
                setJobs(res.data);
            })
            .catch((err) => console.log("Fetch error:", err));
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Posted By</th>
                            <th>Summary</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.category}</td>
                                <td>{job.postedBy}</td>
                                <td>{job.summary}</td>
                                <td>
                                    <Link to={`/JobDetails/${job._id}`} className="btn btn-primary">View Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;