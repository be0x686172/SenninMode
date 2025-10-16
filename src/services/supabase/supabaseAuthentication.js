import { supabase } from "./supabaseClient";

// Create a new user
export async function signUp(email, password, setError) { 
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error && error.message == "User already registered") setError("The email address is already in use");

    return data;
}

// Sign in a user
export async function signIn(email, password, setError) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error && error.message == "Invalid login credentials") setError("Invalid login credentials");

    return data;
}

// Retrieve a session
export async function getSession() {
    const {data, error} = await supabase.auth.getSession();

    return data;
}