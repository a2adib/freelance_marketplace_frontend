import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';


const MyAcceptedTasks = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    

  useEffect(() => {

    axios
      .get(`http://localhost:3000/acceptedJobs?email=${user?.email}`)
      .then((res) => setJobs(res.data))
      .catch((err) => console.log("Fetch error:", err));
  }, [user?.email]);

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">My Accepted Tasks</h1>
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
                                {/* <button onClick={() => removeTask(task._id)} className="btn btn-success">Done</button>
                                <button onClick={() => removeTask(task._id)} className="btn btn-error">Cancel</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAcceptedTasks;