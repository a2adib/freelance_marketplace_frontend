import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const jobs = [
    {
        _id: '1',
        title: 'Web Developer',
        category: 'Web Development',
        postedBy: 'John Doe',
        summary: 'Looking for a skilled web developer to build a responsive website.',
        postedDate: '2025-12-01',
    },
    {
        _id: '2',
        title: 'Graphic Designer',
        category: 'Graphic Design',
        postedBy: 'Jane Smith',
        summary: 'We need a creative graphic designer to create a new logo.',
        postedDate: '2025-11-20',
    },
];

const AllJobs = () => {
    const [sortOrder, setSortOrder] = useState('asc');

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
                                    <Link to={`/job/${job._id}`} className="btn btn-primary">View Details</Link>
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