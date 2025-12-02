import React from 'react';

const MyAcceptedTasks = () => {
    // Mock data for now
    const acceptedTasks = [
        { id: 1, title: 'Build a React Website', category: 'Web Development' },
        { id: 2, title: 'Design a Logo', category: 'Graphic Design' },
    ];

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">My Accepted Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {acceptedTasks.map(task => (
                    <div key={task.id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{task.title}</h2>
                            <p>{task.category}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-success">Done</button>
                                <button className="btn btn-error">Cancel</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAcceptedTasks;