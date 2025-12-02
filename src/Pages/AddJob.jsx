import React from 'react';

const AddJob = () => {
    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">Add a New Job</h1>
            <div className="max-w-lg mx-auto">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" placeholder="Job Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Posted By</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" readOnly value="John Doe" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered">
                            <option>Web Development</option>
                            <option>Graphic Design</option>
                            <option>Content Writing</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Job Summary"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cover Image URL</span>
                        </label>
                        <input type="text" placeholder="Image URL" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;