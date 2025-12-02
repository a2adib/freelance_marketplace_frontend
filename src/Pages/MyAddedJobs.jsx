import React, { useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const MyAddedJobs = () => {
    const { user } = useContext(AuthContext);
    const axios = useAxios();
    const queryClient = useQueryClient();

    const getMyJobs = async () => {
        const res = await axios.get(`/jobs/user/${user.email}`);
        return res.data;
    }

    const { data: myJobs, isLoading, isError, error } = useQuery({
        queryKey: ['myJobs', user?.email],
        queryFn: getMyJobs,
        enabled: !!user,
    });

    const { mutate: deleteJob } = useMutation({
        mutationFn: (id) => {
            return axios.delete(`/jobs/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['myJobs', user?.email]);
            toast.success('Job deleted successfully');
        },
        onError: (err) => {
            toast.error(err.message);
        }
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