import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../lib/auth";
import { AuthArtPanel } from "../components/AuthArtPanel";

export const SignupPage = () => {
  const { signUp, loading, error } = useAuthStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData);
      alert("Sign up successful! Check your email for verification.");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl bg-white">
        
        {/* Shared Split Brand Panel */}
        <AuthArtPanel />
        
        {/* Right Form Panel matching layout theme */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:w-3/5 bg-[#f3e8ff] p-8 md:p-12 flex flex-col justify-between min-h-[650px]"
        >
          {/* Top Header Row */}
          <div className="flex justify-end text-xs text-gray-600 mb-6">
            <span className="cursor-pointer hover:underline">English (UK)</span>
          </div>

          <div className="max-w-xl w-full mx-auto my-auto">
            <h2 className="text-3xl font-bold text-indigo-950 mb-8">Create Account</h2>

            {error && (
              <div className="mb-4 text-sm text-red-600 bg-red-100 border border-red-300 p-3 rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First & Last Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    id="firstName" 
                    type="text" 
                    required 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-600 text-gray-800 transition-colors" 
                  />
                  <label htmlFor="firstName" className="absolute left-3 top-[-10px] bg-[#f3e8ff] px-1 text-xs text-gray-500">
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    id="lastName" 
                    type="text" 
                    required 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-600 text-gray-800 transition-colors" 
                  />
                  <label htmlFor="lastName" className="absolute left-3 top-[-10px] bg-[#f3e8ff] px-1 text-xs text-gray-500">
                    Last Name
                  </label>
                </div>
              </div>

              {/* Email & Gender row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2 relative">
                  <input 
                    id="email" 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-600 text-gray-800 transition-colors" 
                  />
                  <label htmlFor="email" className="absolute left-3 top-[-10px] bg-[#f3e8ff] px-1 text-xs text-gray-500">
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <select 
                    id="gender" 
                    required
                    value={formData.gender} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-600 text-gray-600 appearance-none bg-no-repeat bg-right"
                  >
                    <option value="" disabled hidden>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <label htmlFor="gender" className="absolute left-3 top-[-10px] bg-[#f3e8ff] px-1 text-xs text-gray-500">
                    Gender
                  </label>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Password Input Field */}
              <div className="relative">
                <input 
                  id="password" 
                  type="password" 
                  required 
                  value={formData.password} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-600 text-gray-800 transition-colors" 
                />
                <label htmlFor="password" className="absolute left-3 top-[-10px] bg-[#f3e8ff] px-1 text-xs text-gray-500">
                  Password
                </label>
              </div>

              {/* Main Submit Action */}
              <button 
                type="submit" 
                disabled={loading} 
                className="w-full py-3.5 bg-indigo-900 hover:bg-indigo-950 text-white font-medium rounded-xl transition duration-200 shadow-md"
              >
                {loading ? "Processing..." : "Continue to CAPTCHA"}
              </button>

              {/* Sub Links Context Layout */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1 text-xs">
                <span className="text-gray-600">
                  Already have an account? <a href="/login" className="text-indigo-800 font-semibold hover:underline">Login</a>
                </span>
                <a href="#" className="text-indigo-800 font-semibold hover:underline bg-indigo-950/10 px-3 py-1.5 rounded-full inline-block text-center">
                  Forgot password?
                </a>
              </div>
            </form>

            {/* Visual Text Divider */}
            <div className="relative flex py-6 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {/* OAuth Federation Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 py-3 border border-gray-400 rounded-xl bg-transparent hover:bg-white/50 transition text-sm text-gray-700">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" /> 
                Sign up with Gmail
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-3 border border-gray-400 rounded-xl bg-transparent hover:bg-white/50 transition text-sm text-gray-700">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" /> 
                Sign up with Facebook
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;