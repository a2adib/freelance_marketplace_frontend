import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const MyAddedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/myAddedJobs?email=${user?.email}`)
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setLoading(false);
      });
  }, [user?.email]);

  const myJobs = jobs.filter((job) => job.userEmail === user?.email);

  const deleteJob = (id) => {
    console.log(`Job with id ${id} deleted.`);
    axios.delete(`http://localhost:3000/delete/${id}`)
        .then((res) => {
            console.log('Job deleted successfully:', res.data);
            const remainingJobs = myJobs.filter(job => job._id !== id);
            setJobs(remainingJobs);
        })
        .catch((err) => {
            console.log('Error deleting job:', err);
        });
  };

  return (
    <div className="container mx-auto my-12">
      <h1 className="text-4xl font-bold text-center mb-8">My Added Jobs</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myJobs.map((job) => (
            <div key={job._id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{job.title}</h2>
                <p>{job.category}</p>
                <p>{job.summary}</p>
                <div className="card-actions justify-end">
                  <Link to={`/updateJob/${job._id}`} className="btn btn-primary">
                    Update
                  </Link>
                  <button
                    onClick={() => deleteJob(job._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedJobs;
