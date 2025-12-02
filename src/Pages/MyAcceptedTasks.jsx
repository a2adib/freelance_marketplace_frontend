import React, { useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const MyAcceptedTasks = () => {
    const { user } = useContext(AuthContext);
    const axios = useAxios();
    const queryClient = useQueryClient();

    const getAcceptedTasks = async () => {
        const res = await axios.get(`/accepted-jobs/${user.email}`);
        return res.data;
    }

    const { data: acceptedTasks, isLoading, isError, error } = useQuery({
        queryKey: ['acceptedTasks', user?.email],
        queryFn: getAcceptedTasks,
        enabled: !!user,
    });

    const { mutate: removeTask } = useMutation({
        mutationFn: (id) => {
            return axios.delete(`/accepted-jobs/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['acceptedTasks', user?.email]);
            toast.success('Task status updated successfully');
        },
        onError: (err) => {
            toast.error(err.message);
        }
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader color="#36d7b7" size={50} />
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
            <h1 className="text-4xl font-bold text-center mb-8">My Accepted Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {acceptedTasks.map(task => (
                    <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{task.title}</h2>
                            <p>{task.category}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => removeTask(task._id)} className="btn btn-success">Done</button>
                                <button onClick={() => removeTask(task._id)} className="btn btn-error">Cancel</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAcceptedTasks;