import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { logout, updateUser } from "../redux/slices/authSlice"; // Ensure these actions are defined in your authSlice
import { FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  
    
   
  //   const dispatch = useDispatch();
  //   const user = useSelector((state) => state.auth.user);
  //   const [editing, setEditing] = useState(false);
  //   const [updatedUser, setUpdatedUser] = useState(user);

  //   const handleLogout = () => {
  //     dispatch(logout());
  //   };

  //   const handleEdit = () => {
  //     setEditing(true);
  //   };

  //   const handleSave = () => {
  //     dispatch(updateUser(updatedUser));
  //     setEditing(false);
  //   };

  //   const handleChange = (e) => {
  //     setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  //   };

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <FaUserCircle size={80} className="text-gray-500 mr-4" />
          <div>
            <h1 className="text-2xl font-semibold">{"user.name"}</h1>
            <p className="text-gray-600">{"user.email"}</p>
          </div>
        </div>
        {/* {"editing" ? ( */}
        <div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value="{updatedUser.name}"
              onChange="{handleChange}"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value="{updatedUser.email}"
              onChange="{handleChange}"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>
          <button
            onClick="{handleSave}"
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            //   onClick={() => setEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
        {/* ) : ( */}
        <div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <p className="border rounded-lg p-2 mt-1">{"user.name"}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <p className="border rounded-lg p-2 mt-1">{"user.email"}</p>
          </div>
          <button
            onClick={"handleEdit"}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Edit
          </button>
        </div>
        {/* )} */}
        <button
          onClick={"handleLogout"}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
