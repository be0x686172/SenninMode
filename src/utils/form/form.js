// REGEX
const emailRegex = /^\S+@\S+\.\S+$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export function verifyValidEmail(email, setError)
{
    if (emailRegex.test(email)) return true;
    else setError("False email");
}

export function verifyValidPassword(password, setError)
{
    if (passwordRegex.test(password)) return true;
    else setError("False password");
}

export function verifyConfirmPassword(password, confirmPassword, setError)
{
    if (password === confirmPassword) return true;
    else setError("False confirm password")
}