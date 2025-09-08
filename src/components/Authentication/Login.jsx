import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/userApiCalling";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser(formData);
    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      navigate("/quize");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md backdrop-blur-xs rounded-xl shadow-[0_4px_6px_rgba(255,115,0,0.2)] overflow-hidden border border-orange-500/20 relative z-10"
      >
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-6 px-8">
          <div className="flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-white mr-2" />
            <h1 className="text-2xl font-bold text-white text-center">
              GuideMeMate
            </h1>
          </div>
          <p className="text-orange-100 text-center mt-2">
            Sign in to continue your career journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-6">
          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
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
          </div>
          {/* Rember me */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-600 rounded bg-gray-800"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember me
              </label>
            </div>
            {/* Forgot password */}
            {/* <div className="text-sm">
              <a
                href="#"
                className="font-medium text-orange-400 hover:text-orange-300"
              >
                Forgot your password?
              </a>
            </div> */}
          </div>
          {/* sign button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:shadow-orange-500/20 transition duration-200 border border-orange-500/30 cursor-pointer"
          >
            Sign in
          </motion.button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-orange-400 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
