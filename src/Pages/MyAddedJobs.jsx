import React from 'react';

const MyAddedJobs = () => {
    // Mock data for now
    const myJobs = [
        { id: 1, title: 'My Awesome Job', category: 'Web Development', summary: 'This is a job I posted.' },
    ];

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">My Added Jobs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {myJobs.map(job => (
                    <div key={job.id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{job.title}</h2>
                            <p>{job.category}</p>
                            <p>{job.summary}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Update</button>
                                <button className="btn btn-error">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAddedJobs;