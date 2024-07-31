import React from "react";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software developer with a passion for creating innovative solutions. Loves to travel and explore new technologies.",
    location: "San Francisco, CA",
    education: "B.S. in Computer Science from Stanford University",
    work: "Senior Developer at TechCorp",
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl mt-40 mb-40">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <FaUserCircle size={100} className="text-gray-500 mr-6" />
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default UserProfile;
