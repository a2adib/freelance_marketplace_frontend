import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const jobs = [
    {
        _id: '1',
        title: 'Web Developer',
        category: 'Web Development',
        postedBy: 'John Doe',
        summary: 'Looking for a skilled web developer to build a responsive website.',
        postedDate: '2025-12-01',
        userEmail: 'john.doe@example.com',
        coverImage: 'https://via.placeholder.com/800x400'
    },
    {
        _id: '2',
        title: 'Graphic Designer',
        category: 'Graphic Design',
        postedBy: 'Jane Smith',
        summary: 'We need a creative graphic designer to create a new logo.',
        postedDate: '2025-11-20',
        userEmail: 'jane.smith@example.com',
        coverImage: 'https://via.placeholder.com/800x400'
    },
];

const JobDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const job = jobs.find(j => j._id === id);

    const handleAcceptJob = () => {
        console.log(`Job with id ${id} accepted by ${user.email}`);
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
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={job.coverImage} alt="Job"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{job.title}</h2>
                    <p>Category: {job.category}</p>
                    <p>Posted By: {job.postedBy}</p>
                    <p>Summary: {job.summary}</p>
                    <div className="card-actions justify-end">
                        <button 
                            className="btn btn-primary"
                            onClick={handleAcceptJob}
                            disabled={user?.email === job.userEmail}
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;