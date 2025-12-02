import React from 'react';

const AllJobs = () => {
    // Mock data for now
    const jobs = [
        { id: 1, title: 'Build a React Website', category: 'Web Development', postedBy: 'John Doe', summary: 'Looking for a developer to build a modern React website.' },
        { id: 2, title: 'Design a Logo', category: 'Graphic Design', postedBy: 'Jane Smith', summary: 'Need a creative logo for our new startup.' },
        { id: 3, title: 'Write Blog Posts', category: 'Content Writing', postedBy: 'Peter Jones', summary: 'Seeking a writer for our company blog.' },
    ];

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">All Jobs</h1>
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
                            <tr key={job.id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.category}</td>
                                <td>{job.postedBy}</td>
                                <td>{job.summary}</td>
                                <td>
                                    <button className="btn btn-primary">View Details</button>
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