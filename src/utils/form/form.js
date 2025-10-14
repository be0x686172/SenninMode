// REGEX
const emailRegex = /^\S+@\S+\.\S+$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export function verifyValidEmail(email, setError)
{
    if (email.length > 0) {
        if (emailRegex.test(email)) return true;
        else setError("Invalid email address"); 
    } else setError("Please enter email address");
}

export function verifyValidPassword(password, setError)
{
    if (passwordRegex.test(password)) return true;
    else setError("Invalid password");
}

export function verifyConfirmPassword(password, confirmPassword, setError)
{
    if (password === confirmPassword) return true;
    else setError("Invalid confirmation password")
}