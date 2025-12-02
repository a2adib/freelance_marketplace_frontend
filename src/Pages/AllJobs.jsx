import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import { Link } from 'react-router-dom';

const AllJobs = () => {
    const axios = useAxios();
    const [sortOrder, setSortOrder] = useState('asc');

    const getJobs = async () => {
        const res = await axios.get('/jobs');
        return res.data;
    }

    const { data: jobs, isLoading, isError, error } = useQuery({
        queryKey: ['jobs'],
        queryFn: getJobs,
    });

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

    const sortedJobs = [...jobs].sort((a, b) => {
        if (sortOrder === 'asc') {
            return new Date(a.postedDate) - new Date(b.postedDate);
        } else {
            return new Date(b.postedDate) - new Date(a.postedDate);
        }
    });

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">All Jobs</h1>
            <div className="text-center mb-4">
                <button
                    className="btn btn-secondary"
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                >
                    Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
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
                        {sortedJobs.map((job, index) => (
                            <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.category}</td>
                                <td>{job.postedBy}</td>
                                <td>{job.summary}</td>
                                <td>
                                    <Link to={`/allJobs/${job._id}`} className="btn btn-primary">View Details</Link>
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