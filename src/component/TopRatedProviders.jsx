import React from "react";
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
const TopRatedProviders = () => {
  return (
    <div className="mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8">
      <div>
        <h3 className="font-bold text-3xl text-center mb-8">
          Top Rated Providers
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure className="w-full lg:w-1/3">
            <img
              src={p3}
              alt="Aisha Khan, PhD"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body lg:w-2/3">
            <h2 className="card-title">Aisha Khan, PhD</h2>
            <p>Programmer</p>
            <p>8 Years Exp.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Talk with her</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure className="w-full lg:w-1/3">
            <img
              src={p2}
              alt="Ricardo"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body lg:w-2/3">
            <h2 className="card-title">Ricardo</h2>
            <p>Chef</p>
            <p>6 Years Exp.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Talk with him</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure className="w-full lg:w-1/3">
            <img
              src={p1}
              alt="David Chen"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body lg:w-2/3">
            <h2 className="card-title">David Chen</h2>
            <p>Finance Advisor</p>
            <p>10 Years Exp.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Talk with him</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;
