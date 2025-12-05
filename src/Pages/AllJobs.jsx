import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(res => {
                setJobs(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const filteredJobs = jobs.filter(job => {
        if (selectedCategory === 'All') {
            return true;
        }
        return job.category === selectedCategory;
    });

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">All Jobs</h1>
            <div className="text-center mb-4">
                <select 
                    className="select select-bordered w-full max-w-xs"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option>All</option>
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Content Writing</option>
                    <option>Digital Marketing</option>
                    <option>Video Editing</option>
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
                        {filteredJobs.map((job, index) => (
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