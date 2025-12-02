import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from 'react-hot-toast';

import { ClipLoader } from 'react-spinners'; // Import ClipLoader

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const [bookingName, setBookingName] = useState(user?.displayName || '');
  const [bookingEmail, setBookingEmail] = useState(user?.email || '');

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      const findResult = services.find((service) => service.skillId == id);
      setServiceDetails(findResult);
    }
  }, [id, services]);

  useEffect(() => {
    if (user) {
      setBookingName(user.displayName || '');
      setBookingEmail(user.email || '');
    }
  }, [user]);


  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      serviceId: id,
      serviceName: serviceDetails.skillName,
      providerName: serviceDetails.providerName,
      bookingName,
      bookingEmail,
    });
    toast.success("Session booked successfully!");
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  if (!serviceDetails) {
    return <div className="text-center text-xl mt-10">Service not found.</div>;
  }

  const {
    skillName,
    providerName,
    image,
    ratingAvg,
    reviews,
    slotsAvailable,
    description,
  } = serviceDetails;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{skillName}</h1>
          <div className="flex flex-wrap items-center mt-2 text-gray-600">
            <span className="font-semibold">Hosted by {providerName}</span>
            <span className="mx-2">·</span>
            <span>⭐ {ratingAvg} ({reviews} reviews)</span>
            <span className="mx-2">·</span>
            <span className="text-green-600 font-semibold">
              {slotsAvailable} slots available
            </span>
          </div>
        </div>

        <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
          <img
            src={image}
            alt={skillName}
            className="rounded-lg object-cover w-full h-auto md:h-96"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About this service
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>{description}</p>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Book a session
              </h3>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="form-control">
                  <label htmlFor="bookingName" className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    id="bookingName"
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="bookingEmail" className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    id="bookingEmail"
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full btn btn-primary transition ease-in-out duration-150 transform hover:scale-105"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;