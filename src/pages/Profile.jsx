import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "Vikram Kumar",
    username: "vikramkumar0120arav@",
    email: "vikramkumar0120arav@.com",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff8000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>
      {/* Glowing effects */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-600 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-4xl w-full border-1 border-orange-800 rounded-lg shadow-[0_4px_6px_rgba(255,115,0,0.2)] p-6 space-y-6">
        {/* Desktop-view */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden flex items-center justify-center text-md lg:text-2xl font-bold">
            <span>VK</span>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-orange-500 via-orange-600 to-orange-700">
              {profileData?.fullName}
            </h2>
            <p className="text-gray-400">
              @{profileData?.email?.split("@")[0]}
            </p>
            <p className="text-gray-400">{profileData?.email}</p>
          </div>
        </div>

        <div className="border-2 border-gray-700 p-4 rounded-md space-y-4">
          <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Full Name</label>
             
              <p className="font-semibold">{profileData?.fullName}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Username</label>
              <p className="text-white">@{profileData?.email?.split("@")[0]}</p>
            </div>
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <p className="w-full mt-1 p-2 bg-[#1e1e1e] text-white border border-gray-600 rounded">
                {profileData?.email}
                <span className="ml-2 text-sm">🔒</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
