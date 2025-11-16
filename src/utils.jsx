import { supabase } from "./supabase";

export async function getProfileById(userId) {
    if (!userId) return null;
  
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single(); // ensures one row, not an array
  
    if (error) {
      console.error("Error fetching profile:", error.message);
      return null;
    }
  
    return data; // returns the entire profile row
  }