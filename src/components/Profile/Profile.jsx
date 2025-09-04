import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    class: "Graduate",
    location: "New Delhi, India",
    bio: "Passionate about computer science and AI. Looking to pursue a career in data science.",
    phone: "+91 98765 43210",
    dob: "2002-05-15",
    interests: ["Machine Learning", "Data Analysis", "Web Development", "Photography"]
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("https://randomuser.me/api/portraits/women/44.jpg");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    updates: true,
    reminders: true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveChanges = () => {
    setIsEditing(false);
    // Simulate API call to save data
    setTimeout(() => {
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-transform transform translate-x-0';
      successMsg.textContent = 'Profile updated successfully!';
      document.body.appendChild(successMsg);
      
      setTimeout(() => {
        successMsg.classList.add('translate-x-full');
        setTimeout(() => document.body.removeChild(successMsg), 300);
      }, 3000);
    }, 500);
  };

  const downloadData = () => {
    // Simulate data download
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "user_data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
        <p className="text-gray-600 mb-8">Manage your account settings and preferences</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <img
                    src={profileImage}
                    alt="User"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <label htmlFor="imageUpload" className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer shadow-md hover:bg-blue-600 transition-colors">
                    <span className="text-sm">📷</span>
                    <input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
                <h2 className="font-semibold text-gray-900">{userData.name}</h2>
                <p className="text-sm text-gray-600">{userData.email}</p>
              </div>

              <ul className="space-y-2">
                {[
                  { id: 'profile', label: 'Edit Profile', icon: '👤' },
                  { id: 'notifications', label: 'Notifications', icon: '🔔' },
                  { id: 'security', label: 'Security', icon: '🔒' },
                  { id: 'data', label: 'Data & Privacy', icon: '📊' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-200 ${activeTab === item.id ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={downloadData}
                    className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-gray-700 hover:bg-gray-100 transition-all duration-200"
                  >
                    <span>📥</span>
                    Download My Data
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-red-600 hover:bg-red-50 transition-all duration-200">
                    <span>↩️</span>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Edit Profile</h2>
                  {isEditing ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveChanges}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <span>💾</span>
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <span>✏️</span>
                      Edit Profile
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                    <input
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Class</label>
                    <select
                      name="class"
                      value={userData.class}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    >
                      <option>Graduate</option>
                      <option>Undergraduate</option>
                      <option>Postgraduate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Location</label>
                    <input
                      name="location"
                      value={userData.location}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Phone</label>
                    <input
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Date of Birth</label>
                    <input
                      name="dob"
                      type="date"
                      value={userData.dob}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Bio</label>
                    <textarea
                      name="bio"
                      value={userData.bio}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      rows="3"
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Interests</label>
                    <div className="flex flex-wrap gap-2">
                      {userData.interests.map((interest, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {interest}
                        </span>
                      ))}
                      {isEditing && (
                        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors">
                          + Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                
                <div className="space-y-4">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                      <div>
                        <h3 className="font-medium text-gray-900 capitalize">{key}</h3>
                        <p className="text-sm text-gray-600">
                          {key === 'email' && 'Receive notifications via email'}
                          {key === 'sms' && 'Receive notifications via SMS'}
                          {key === 'updates' && 'Get updates about new features'}
                          {key === 'reminders' && 'Receive reminder notifications'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() => handleNotificationChange(key)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
                
                <div className="space-y-6">
                  <div className="p-4 border rounded-xl">
                    <h3 className="font-medium text-gray-900 mb-2">Change Password</h3>
                    <p className="text-sm text-gray-600 mb-4">Update your password regularly to keep your account secure</p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Change Password
                    </button>
                  </div>
                  
                  <div className="p-4 border rounded-xl">
                    <h3 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                      Enable 2FA
                    </button>
                  </div>
                  
                  <div className="p-4 border rounded-xl">
                    <h3 className="font-medium text-gray-900 mb-2">Active Sessions</h3>
                    <p className="text-sm text-gray-600 mb-4">Manage your active login sessions</p>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Chrome on Windows</p>
                        <p className="text-sm text-gray-600">New Delhi, India • Active now</p>
                      </div>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                        Log out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'data' && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Data & Privacy</h2>
                
                <div className="space-y-6">
                  <div className="p-4 border rounded-xl">
                    <h3 className="font-medium text-gray-900 mb-2">Download Your Data</h3>
                    <p className="text-sm text-gray-600 mb-4">Get a copy of your data to use with other services</p>
                    <button 
                      onClick={downloadData}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <span>📥</span>
                      Request Data Download
                    </button>
                  </div>
                  
                  <div className="p-4 border rounded-xl">
                    <h3 className="font-medium text-gray-900 mb-2">Data Sharing Preferences</h3>
                    <p className="text-sm text-gray-600 mb-4">Control how your data is used to improve your experience</p>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Personalized Recommendations</p>
                        <p className="text-sm text-gray-600">Use my data to provide personalized content</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-xl">
                    <h3 className="font-medium text-gray-900 mb-2">Delete Account</h3>
                    <p className="text-sm text-gray-600 mb-4">Permanently delete your account and all associated data</p>
                    <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;