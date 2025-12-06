// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';



const Home = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/jobs')
    .then(res=>{
        setJobs(res.data);
        setLoading(false);
    })
    .catch(err=>{
        console.log(err);
        setLoading(false);
    })
}, []);

const latestJobs = [...jobs].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    }).slice(0, 6);

    const bannerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            {/* Banner Section */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <motion.div
                        className="max-w-md"
                        variants={bannerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 variants={itemVariants} className="mb-5 text-5xl font-bold">Connect, Collaborate, and Create</motion.h1>
                        <motion.p variants={itemVariants} className="mb-5">The most reliable marketplace for connecting with skilled freelancers and finding your next project.</motion.p>
                        <motion.div variants={itemVariants} className="flex justify-center gap-4">
                            <button className="btn btn-primary">How It Works</button>
                            <Link to="/addJob" className="btn btn-secondary">Create a Job</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Dynamic Section (Latest 6 Jobs) */}
            <div className="container mx-auto my-12">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Jobs</h2>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <ClipLoader size={50} color={"#123abc"} loading={loading} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestJobs.map(job => (
                            <div key={job._id} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={job.coverImage} alt="Job" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {job.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{job.summary}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/JobDetails/${job._id}`} className="btn btn-primary">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Static Section 1: Top Categories */}
            <div className="bg-base-200 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Top Categories</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Web Development" /></figure>
                            <div className="card-body">
                                <div className="card-title text-white">Web Development</div>
                            </div>
                        </div>
                        <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Graphic Design" /></figure>
                            <div className="card-body">
                                <div className="card-title text-white">Graphic Design</div>
                            </div>
                        </div>
                        <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Content Writing" /></figure>
                            <div className="card-body">
                                <div className="card-title text-white">Content Writing</div>
                            </div>
                        </div>
                         <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Content Writing" /></figure>
                            <div className="card-body">
                                <div className="card-title text-white">Digital Marketing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Static Section 2: About the Platform */}
            <div className="container mx-auto my-12">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm rounded-lg shadow-2xl" alt="About" />
                        <div>
                            <h1 className="text-5xl font-bold">About Freelance Marketplace</h1>
                            <p className="py-6">Freelance Marketplace is a curated marketplace that connects businesses with top-tier freelancers. We believe in fostering a community of trust, collaboration, and excellence, making it easier than ever to find the right talent or your next big project.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;