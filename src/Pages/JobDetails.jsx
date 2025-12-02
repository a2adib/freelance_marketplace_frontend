import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const JobDetails = () => {
    const { id } = useParams();
    const axios = useAxios();
    const { user } = useContext(AuthContext);

    const getJob = async () => {
        const res = await axios.get(`/jobs/${id}`);
        return res.data;
    }

    const { data: job, isLoading, isError, error } = useQuery({
        queryKey: ['job', id],
        queryFn: getJob,
    });

    const { mutate } = useMutation({
        mutationFn: (acceptedJob) => {
            return axios.post('/accepted-jobs', acceptedJob);
        },
        onSuccess: () => {
            toast.success('Job accepted successfully');
        },
        onError: (err) => {
            toast.error(err.message);
        }
    });

    const handleAcceptJob = () => {
        const acceptedJob = { ...job, acceptedBy: user.email };
        mutate(acceptedJob);
    }

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