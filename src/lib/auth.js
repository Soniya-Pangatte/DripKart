import { create } from 'zustand';
import { supabase } from './supabaseClient';

// Ensure the export keyword is right here before const
export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  setUser: (user) => set({ user }),

  // Sign Up Action
  signUp: async ({ email, password, firstName, lastName, gender }) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            gender: gender,
          },
        },
      });

      if (error) throw error;
      return data;
    } catch (err) {
      set({ error: err.message });
      throw err;
    } finally {
      set({ loading: false });
    }
  },

  // Sign In Action
  signIn: async ({ email, password }) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      set({ user: data.user });
      return data;
    } catch (err) {
      set({ error: err.message });
      throw err;
    } finally {
      set({ loading: false });
    }
  },

  // Sign Out Action
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  }
}));