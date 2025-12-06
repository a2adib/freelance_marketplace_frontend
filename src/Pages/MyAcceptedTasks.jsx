import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';


const MyAcceptedTasks = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    

  useEffect(() => {
    axios
      .get(`https://freelance-marketplace-backend.vercel.app/acceptedJobs?email=${user?.email}`)
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setLoading(false);
      });
  }, [user?.email]);

   const removeTask = (id) => {
    console.log(`Task with id ${id} removed.`);
    axios.delete(`https://freelance-marketplace-backend.vercel.app/remove/${id}`)
        .then((res) => {
            toast.success('Task removed successfully!',res.data);
            const remainingTasks = jobs.filter(task => task._id !== id);
            setJobs(remainingTasks);
        })
        .catch((err) => {
            toast.error('Error removing task!',err);
        });
  }

  const doneTask = (id) => {
    console.log(`Task with id ${id} removed.`);
    axios.delete(`https://freelance-marketplace-backend.vercel.app/remove/${id}`)
        .then((res) => {
            toast.success('Task completed successfully!',res.data);
            const remainingTasks = jobs.filter(task => task._id !== id);
            setJobs(remainingTasks);
        })
        .catch((err) => {
            toast.error('Error completed task!',err);
        });
  }


    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">My Accepted Tasks</h1>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <ClipLoader size={50} color={"#123abc"} loading={loading} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map(task => (
                        <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div>
                                    <img src={task.coverImage} alt={task.title} className="w-full h-48 object-cover rounded-lg mb-4" /> 
                                </div>
                                <h2 className="card-title">{task.title}</h2>
                                <p>{task.category}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => doneTask(task._id)} className="btn btn-success">Done</button>
                                    <button onClick={() => removeTask(task._id)} className="btn btn-error">Cancel</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyAcceptedTasks;