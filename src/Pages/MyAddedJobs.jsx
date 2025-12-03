import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const jobs = [
    {
        _id: '1',
        title: 'Web Developer',
        category: 'Web Development',
        postedBy: 'John Doe',
        summary: 'Looking for a skilled web developer to build a responsive website.',
        postedDate: '2025-12-01',
        userEmail: 'john.doe@example.com',
    },
    {
        _id: '2',
        title: 'Graphic Designer',
        category: 'Graphic Design',
        postedBy: 'Jane Smith',
        summary: 'We need a creative graphic designer to create a new logo.',
        postedDate: '2025-11-20',
        userEmail: 'jane.smith@example.com',
    },
    {
        _id: '3',
        title: 'Content Writer',
        category: 'Content Writing',
        postedBy: 'John Doe',
        summary: 'Join our team as a content writer.',
        postedDate: '2025-12-05',
        userEmail: 'john.doe@example.com',
    }
];

const MyAddedJobs = () => {
    const { user } = useContext(AuthContext);

    const myJobs = jobs.filter(job => job.userEmail === user?.email);

    const deleteJob = (id) => {
        console.log(`Job with id ${id} deleted.`);
    };

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">My Added Jobs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {myJobs.map(job => (
                    <div key={job._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{job.title}</h2>
                            <p>{job.category}</p>
                            <p>{job.summary}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/updateJob/${job._id}`} className="btn btn-primary">Update</Link>
                                <button onClick={() => deleteJob(job._id)} className="btn btn-error">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAddedJobs;