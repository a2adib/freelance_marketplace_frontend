// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const latestJobs = [
    {
        _id: '1',
        title: 'Web Developer',
        category: 'Web Development',
        summary: 'Looking for a skilled web developer to build a responsive website.',
        coverImage: 'https://via.placeholder.com/400x250',
    },
    {
        _id: '2',
        title: 'Graphic Designer',
        category: 'Graphic Design',
        summary: 'We need a creative graphic designer to create a new logo.',
        coverImage: 'https://via.placeholder.com/400x250',
    },
    {
        _id: '3',
        title: 'Content Writer',
        category: 'Content Writing',
        summary: 'Join our team as a content writer.',
        coverImage: 'https://via.placeholder.com/400x250',
    },
    {
        _id: '4',
        title: 'Digital Marketer',
        category: 'Digital Marketing',
        summary: 'Experienced digital marketer wanted.',
        coverImage: 'https://via.placeholder.com/400x250',
    },
    {
        _id: '5',
        title: 'Video Editor',
        category: 'Video Editing',
        summary: 'Creative video editor needed for a project.',
        coverImage: 'https://via.placeholder.com/400x250',
    },
    {
        _id: '6',
        title: 'SEO Specialist',
        category: 'Digital Marketing',
        summary: 'Looking for an SEO specialist to improve our ranking.',
        coverImage: 'https://via.placeholder.com/400x250',
    },
];

const Home = () => {
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
                        <motion.h1 variants={itemVariants} className="mb-5 text-5xl font-bold">Find Your Next Big Opportunity</motion.h1>
                        <motion.p variants={itemVariants} className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</motion.p>
                        <motion.button variants={itemVariants} className="btn btn-primary">Get Started</motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Dynamic Section (Latest 6 Jobs) */}
            <div className="container mx-auto my-12">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Jobs</h2>
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
                                    <Link to={`/job/${job._id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
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
                        <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://via.placeholder.com/300x200" alt="Category" /></figure>
                            <div className="card-body">
                                <div className="card-title text-white">Graphic Design</div>
                            </div>
                        </div>
                        <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://via.placeholder.com/300x200" alt="Category" /></figure>
                            <div className="card-body">
                                <div className="card-title text-white">Content Writing</div>
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