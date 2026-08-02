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
              Welcome Back
            </h2>

            {authError && (
              <div className="mb-6 text-sm text-red-800 bg-red-50 border border-red-200 p-4 rounded-2xl">
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
                  className="luxury-input"
                  placeholder="Email Address"
                />
              </div>

              {/* Password Input Field */}
              <div className="relative">
                <input 
                  id="password" 
                  type="password" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="luxury-input"
                  placeholder="Password"
                />
              </div>

              {/* Sub Links Context Layout */}
              <div className="flex items-center justify-between gap-2 pt-2 pb-2 text-sm text-[var(--text-secondary)]">
                <a href="#" className="hover:text-[var(--text-primary)] transition-colors underline underline-offset-4">
                  Forgot password?
                </a>
              </div>

              {/* Main Submit Action */}
              <button 
                type="submit" 
                disabled={loading} 
                className="luxury-button-primary w-full"
              >
                {loading ? "Logging in..." : "Continue"}
              </button>

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
              Don't have an account? <a href="/signup" className="text-[var(--text-primary)] font-medium hover:underline underline-offset-4">Sign up</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;