import { supabaseClient } from './supabaseClient';

// Registration
export const registration = async (email, password) => 
{
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
    });
}

