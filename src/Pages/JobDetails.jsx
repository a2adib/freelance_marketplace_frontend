import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';



const JobDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);


    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
    .then(res=>{
        setJobs(res.data);
    })
    .catch(err=>{
        console.log(err);
    })
}, []);



    const job = jobs.find(j => j._id === id);

    const handleAcceptJob = () => {
        if (!job || !user?.email) return;

        const acceptedJobData = {
            jobId: job._id,
            coverImage: job.coverImage,
            title: job.title,
            category: job.category,
            postedBy: job.postedBy,
            summary: job.summary,
            acceptedBy: user.email,
            acceptedAt: new Date().toISOString(),
        };
        axios.post('http://localhost:3000/acceptedJobs', acceptedJobData)
            .then(res => {
                console.log('Job accepted successfully:', res.data);
                alert('You have successfully accepted the job!');
            })
            .catch(err => {
                console.log('Error accepting job:', err);
            });
    };

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