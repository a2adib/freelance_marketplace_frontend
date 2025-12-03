import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const jobs = [
    {
        _id: '1',
        title: 'Web Developer',
        category: 'Web Development',
        postedBy: 'John Doe',
        summary: 'Looking for a skilled web developer to build a responsive website.',
        postedDate: '2025-12-01',
        userEmail: 'john.doe@example.com',
        coverImage: 'https://via.placeholder.com/800x400'
    },
    {
        _id: '2',
        title: 'Graphic Designer',
        category: 'Graphic Design',
        postedBy: 'Jane Smith',
        summary: 'We need a creative graphic designer to create a new logo.',
        postedDate: '2025-11-20',
        userEmail: 'jane.smith@example.com',
        coverImage: 'https://via.placeholder.com/800x400'
    },
];

const UpdateJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const job = jobs.find(j => j._id === id);

    const handleUpdateJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const summary = form.summary.value;
        const coverImage = form.coverImage.value;

        const updatedJob = {
            ...job,
            title,
            category,
            summary,
            coverImage,
        };

        console.log('Updated Job:', updatedJob);
        navigate('/myAddedJobs');
    }

    if (!job) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Job not found.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">Update Job</h1>
            <div className="max-w-lg mx-auto">
                <form onSubmit={handleUpdateJob} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Job Title" className="input input-bordered" defaultValue={job?.title} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered" defaultValue={job?.category}>
                            <option>Web Development</option>
                            <option>Graphic Design</option>
                            <option>Content Writing</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <textarea name="summary" className="textarea textarea-bordered" placeholder="Job Summary" defaultValue={job?.summary}></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cover Image URL</span>
                        </label>
                        <input type="text" name="coverImage" placeholder="Image URL" className="input input-bordered" defaultValue={job?.coverImage} />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateJob;