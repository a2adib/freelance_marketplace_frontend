import React from 'react';

const HowItWorks = () => {
    return (
        <div className="mt-12 px-[145px] py-8 bg-gray-100">
            <h3 className="font-bold text-3xl text-center mb-8">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mx-auto mb-4">
                        <span className="text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-xl mb-2">Find a Skill</h4>
                    <p>Browse our extensive catalog of skills offered by talented providers. Use filters to narrow down your search by category, price, and rating.</p>
                </div>
                <div className="p-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white mx-auto mb-4">
                        <span className="text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-xl mb-2">Book a Session</h4>
                    <p>Once you find a skill you're interested in, select a provider and book a session that fits your schedule. Our booking process is simple and secure.</p>
                </div>
                <div className="p-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-500 text-white mx-auto mb-4">
                        <span className="text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-xl mb-2">Start Learning</h4>
                    <p>Connect with your provider and start your learning journey. Enjoy one-on-one sessions and gain new skills from the comfort of your home.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
