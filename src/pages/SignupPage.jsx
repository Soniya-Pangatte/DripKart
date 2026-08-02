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
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-8 py-20">
      <div className="w-full max-w-7xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[var(--shadow-hover)] bg-[var(--surface-card)] border border-[var(--border-primary)]">
        
        {/* Shared Split Brand Panel (45%) */}
        <AuthArtPanel />
        
        {/* Right Form Panel (55%) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:w-[55%] p-8 md:p-14 flex flex-col justify-center min-h-[650px] bg-[var(--surface-card)]"
        >
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-serif text-[var(--text-primary)] mb-8 font-light">
              Create Account
            </h2>

            {error && (
              <div className="mb-6 text-sm text-red-800 bg-red-50 border border-red-200 p-4 rounded-2xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First & Last Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <input 
                    id="firstName" 
                    type="text" 
                    required 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    className="luxury-input" 
                    placeholder="First Name"
                  />
                </div>
                <div className="relative">
                  <input 
                    id="lastName" 
                    type="text" 
                    required 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    className="luxury-input" 
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email & Gender row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2 relative">
                  <input 
                    id="email" 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="luxury-input" 
                    placeholder="Email Address"
                  />
                </div>
                <div className="relative">
                  <select 
                    id="gender" 
                    required
                    value={formData.gender} 
                    onChange={handleChange} 
                    className="luxury-input appearance-none bg-no-repeat bg-right"
                  >
                    <option value="" disabled hidden>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[var(--text-muted)] text-xs">
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
                  className="luxury-input" 
                  placeholder="Password"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="luxury-button-primary w-full"
                >
                  {loading ? "Processing..." : "Continue"}
                </button>
              </div>

            </form>

            {/* Visual Text Divider */}
            <div className="relative flex py-8 items-center">
              <div className="flex-grow border-t border-[var(--border-primary)]"></div>
              <span className="flex-shrink mx-4 text-[var(--text-muted)] text-sm">or</span>
              <div className="flex-grow border-t border-[var(--border-primary)]"></div>
            </div>

            {/* OAuth Federation Layout */}
            <div className="grid grid-cols-1 gap-4">
              <button type="button" className="flex items-center justify-center gap-3 py-3.5 border border-[var(--border-primary)] rounded-2xl bg-transparent hover:bg-[var(--bg-section)] transition text-sm text-[var(--text-primary)] font-medium">
                Continue with Google
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-[var(--text-secondary)]">
              Already have an account? <a href="/login" className="text-[var(--text-primary)] font-medium hover:underline underline-offset-4">Login</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;