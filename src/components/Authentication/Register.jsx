import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, MapPin, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import {registerUser} from "../../Services/userApiCalling"


const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    status: '',
   
  });
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(formData)

    if(response.data.success){
      localStorage.setItem('token',response.data.token)
      Navigate('/quize')
    }
   

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff8000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Glowing effects */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-600 rounded-full filter blur-3xl opacity-20"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg backdrop-blur-xs rounded-xl shadow-[0_4px_6px_rgba(255,115,0,0.2)] overflow-hidden border border-orange-500/20 relative z-10"
      >
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-6 px-8">
          <h1 className="text-3xl font-bold text-white text-center">Create Your Account</h1>
          <p className="text-orange-100 text-center mt-2">Start your career journey with us</p>
        </div>
        
        <form onSubmit={handleSubmit} className="px-8 py-6">
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-300 mb-1">
              Enter your full name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-orange-400" />
              </div>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none  transition duration-200"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-orange-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none transition duration-200"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          {/* Password */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-orange-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none transition duration-200"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-orange-400" />
                ) : (
                  <Eye className="h-5 w-5 text-orange-400" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Use 8+ characters with a mix of letters, numbers & symbols</p>
          </div>
          {/* Age */}
          <div className="mb-5">
            <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-1">
              Enter your age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none transition duration-200"
              placeholder="18"
              min="15"
              max="25"
              required
            />
          </div>
          {/* Gender */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gender (Optional)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Male', 'Female', 'Prefer not to say'].map((gender) => (
                <div key={gender} className="flex items-center">
                  <input
                    type="radio"
                    id={gender.toLowerCase().replace(/\s+/g, '-')}
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                    className="hidden peer"
                  />
                  <label 
                    htmlFor={gender.toLowerCase().replace(/\s+/g, '-')} 
                    className="w-full text-center py-2 px-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 peer-checked:border-orange-500 peer-checked:bg-orange-900/30 peer-checked:text-orange-400 cursor-pointer transition duration-200 text-sm"
                  >
                    {gender}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Class */}
          <div className="mb-5">
            <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-1">
              Current Class/Status
            </label>
            <div className="relative">
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none transition duration-200 appearance-none"
                required
              >
                <option value="" className="bg-gray-800">Select your class</option>
                <option value="10th" className="bg-gray-800">10th Grade</option>
                <option value="11th" className="bg-gray-800">11th Grade</option>
                <option value="12th" className="bg-gray-800">12th Grade</option>
                <option value="graduate" className="bg-gray-800">Graduate</option>
                <option value="other" className="bg-gray-800">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-orange-400" />
              </div>
            </div>
          </div>
          {/* Pincode */}
          {/* <div className="mb-6">
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-300 mb-1">
              Enter your 6-digit PIN code
            </label>
            <div className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-orange-400" />
                </div>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none transition duration-200"
                  placeholder="123456"
                  pattern="[0-9]{6}"
                  maxLength="6"
                  required
                />
              </div>
              <button
                type="button"
                className="ml-2 px-4 py-3 bg-orange-900/30 text-orange-400 rounded-lg hover:bg-orange-800/40 transition duration-200 text-sm font-medium whitespace-nowrap border border-orange-500/30"
              >
                Detect Location
              </button>
            </div>
          </div> */}
          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:shadow-orange-500/20 transition duration-200 border border-orange-500/30 cursor-pointer"
          >
            Create Account
          </motion.button>
          
          <p className="text-center text-sm text-gray-400 mt-4">
            By continuing, you agree to our <span  className="text-orange-400 hover:underline">Terms of Service</span> and <span  className="text-orange-400 hover:underline">Privacy Policy</span>.
          </p>
          {/* Sign */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">
              Already have an account? 
              <Link to="/login" className="ml-1 font-medium text-orange-400 hover:underline">Sign in</Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;