import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const acceptedTasks = [
    {
        _id: '1',
        title: 'Web Developer',
        category: 'Web Development',
        acceptedBy: 'john.doe@example.com'
    },
    {
        _id: '2',
        title: 'Graphic Designer',
        category: 'Graphic Design',
        acceptedBy: 'jane.smith@example.com'
    },
    {
        _id: '3',
        title: 'Content Writer',
        category: 'Content Writing',
        acceptedBy: 'john.doe@example.com'
    }
];

const MyAcceptedTasks = () => {
    const { user } = useContext(AuthContext);

    const myAcceptedTasks = acceptedTasks.filter(task => task.acceptedBy === user?.email);

    const removeTask = (id) => {
        console.log(`Task with id ${id} removed.`);
    };

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">My Accepted Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {myAcceptedTasks.map(task => (
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