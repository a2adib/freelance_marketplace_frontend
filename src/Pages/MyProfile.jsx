import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from 'react-hot-toast';

const MyProfile = () => {
  const { setUser, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(user, {
          displayName: name,
          photoURL: photoUrl
        })
          .then(() => {
            setUser({...user, photoURL: photoUrl, displayName: name});
            toast.success("Profile updated successfully!");
            setIsOpen(false);
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            toast.error(error.message || "Failed to update profile.");
          });
  };

  return (
    <div className="flex flex-col justify-center items-center my-10 min-h-screen">
      <div className="avatar mb-4">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
          <img src={user?.photoURL || "https://i.ibb.co/612x2Mb/generic-avatar.png"} alt="User Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{user?.displayName || "User Name"}</h2>
      <p className="text-lg text-gray-600 mb-6">{user?.email}</p>
      
      <button onClick={handleOpenForm} className="btn btn-primary btn-wide mb-8">
        {isOpen ? "Cancel Update" : "Update Profile"}
      </button>

      {isOpen && (
        <form onSubmit={handleUpdate} className="bg-base-100 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h3 className="text-2xl font-bold text-center mb-6">Update Your Profile</h3>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={user?.displayName || ""}
              name="name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              defaultValue={user?.photoURL || ""}
              name="photoUrl"
              type="text"
              className="input input-bordered w-full"
              placeholder="New Photo URL"
            />
          </div>
          <button type="submit" className="btn btn-neutral btn-block">Update</button>
        </form>
      )}
    </div>
  );
};

export default MyProfile;