import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(services);

  return (
    <div className="mt-12 px-4 md:px-[145px]">
      <div className="text-center mb-8">
        <h3 className="font-bold text-4xl">Popular Skills</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 justify-items-center">
        {services.slice(0,3).map((service) => (
          <div key={service.skillId} className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="h-60 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                src={service?.image}
                alt={service?.skillName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{service?.skillName}</h2>
              <div className="flex justify-between items-center mt-2 text-lg">
                <p className="text-primary font-semibold">
                    Price : ${service?.price}
                </p>
                <p className="text-yellow-500 flex items-center gap-1">
                    <span className="text-xl">⭐</span> {service?.rating}
                </p>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link to={`/details/${service?.skillId}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;