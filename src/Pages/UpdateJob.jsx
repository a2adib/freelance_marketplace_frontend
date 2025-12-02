import React from 'react';

const UpdateJob = () => {
    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center mb-8">Update Job</h1>
            <div className="max-w-lg mx-auto">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" placeholder="Job Title" className="input input-bordered" defaultValue="My Awesome Job" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered" defaultValue="Web Development">
                            <option>Web Development</option>
                            <option>Graphic Design</option>
                            <option>Content Writing</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Job Summary" defaultValue="This is a job I posted."></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cover Image URL</span>
                        </label>
                        <input type="text" placeholder="Image URL" className="input input-bordered" />
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