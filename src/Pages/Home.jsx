import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Find Your Next Big Opportunity</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Dynamic Section (Latest 6 Jobs) */}
            <div className="container mx-auto my-12">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Jobs</h2>
                {/* Job cards will be mapped here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example Job Card */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://via.placeholder.com/400x225" alt="Job" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Job Title
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Category 1</div>
                                <div className="badge badge-outline">Category 2</div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat for other 5 jobs */}
                </div>
            </div>

            {/* Static Section 1: Top Categories */}
            <div className="bg-base-200 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Top Categories</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Example Category */}
                        <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://via.placeholder.com/300x200" alt="Category" /></figure>
                            <div className="card-body">
                                <div className="card-title text-white">Web Development</div>
                            </div>
                        </div>
                        {/* Repeat for other categories */}
                    </div>
                </div>
            </div>

            {/* Static Section 2: About the Platform */}
            <div className="container mx-auto my-12">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://via.placeholder.com/400x400" className="max-w-sm rounded-lg shadow-2xl" alt="About" />
                        <div>
                            <h1 className="text-5xl font-bold">About Our Platform</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;