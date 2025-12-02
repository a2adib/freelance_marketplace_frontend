import React from 'react';

const JobDetails = () => {
    return (
        <div className="container mx-auto my-12">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://via.placeholder.com/400x400" alt="Job"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Job Title</h2>
                    <p>Category: Web Development</p>
                    <p>Posted By: John Doe</p>
                    <p>Summary: This is a detailed summary of the job. It requires a skilled developer to build a modern and responsive website using the latest technologies.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Accept</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;