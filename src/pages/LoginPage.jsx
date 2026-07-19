import React, { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";
import { AuthArtPanel } from "../components/AuthArtPanel";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAuthError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      alert("Login successful!");
    } catch (err) {
      setAuthError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl bg-white">
        
        {/* Shared Split Brand Panel */}
        <AuthArtPanel />
        
        {/* Right Form Panel matching Signup layout */}
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
            <h2 className="text-3xl font-bold text-indigo-950 mb-8">Welcome Back</h2>

            {authError && (
              <div className="mb-4 text-sm text-red-600 bg-red-100 border border-red-300 p-3 rounded-xl">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input Field */}
              <div className="relative">
                <input 
                  id="email" 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-xl focus:outline-none focus:border-indigo-600 text-gray-800 transition-colors"
                />
                <label htmlFor="email" className="absolute left-3 top-[-10px] bg-[#f3e8ff] px-1 text-xs text-gray-500">
                  Email Address
                </label>
              </div>

              {/* Password Input Field */}
              <div className="relative">
                <input 
                  id="password" 
                  type="password" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
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
                {loading ? "Logging in..." : "Continue to Account"}
              </button>

              {/* Sub Links Context Layout */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1 text-xs">
                <span className="text-gray-600">
                  Don't have an account? <a href="/signup" className="text-indigo-800 font-semibold hover:underline">Sign up</a>
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
                Log in with Gmail
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-3 border border-gray-400 rounded-xl bg-transparent hover:bg-white/50 transition text-sm text-gray-700">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" /> 
                Log in with Facebook
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;