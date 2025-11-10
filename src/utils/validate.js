// Function to validate the Sign IN Form data
export const checkValidData = (email , password) => {
    // Here we are using the reg expression to validate email and password, .test() method will return booean value weather value is valid or not
    const isEmailVaild = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z]).{8,}$/.test(password);

    if(!isEmailVaild) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null ;
}

// Function to validate the Sign UP Form data
export const checkValidSignUpData = (name ,email , password) => {
    // Here we are using the reg expression to validate name, email and password, .test() method will return booean value weather value is valid or not
    const isNameValid = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name);
    const isEmailVaild = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z]).{8,}$/.test(password);

    if(!isNameValid) return "Name is not valid"
    if(!isEmailVaild) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null ;
}




// const isNameValid = /^[A-Za-z]+([ '-][A-Za-z]+)*$/
// This regex is used to validate basic EMAIL address formats.
// It ensures the email starts with letters, numbers, or symbols like ., _, %, or -, followed by an @ symbol.
// After the @, it checks for a valid domain name containing letters, numbers, dots, or hyphens.
// Finally, it requires a dot (.) followed by at least two letters for the domain extension (like .com or .org).
// However, it’s a simple validation and may not cover all valid or invalid email edge cases (e.g., user+test@gmail.com).


// This regex is used to validate a strong PASSWORD.
// It requires the password to have at least one digit (\d), one lowercase letter ([a-z]), and one uppercase letter ([A-Z]).
// The part (?=.*[A-Za-z]) is redundant because the previous two checks already cover letters.
// It also ensures the password is at least 8 characters long (.{8,}).


// This regex is used to validate a strong USERNAME.
// This regex is used to validate names that contain both uppercase and lowercase letters.
// It ensures the name starts with letters and may include spaces, apostrophes, or hyphens between parts.
// The dollar sign $ marks the end of the string, ensuring no extra characters appear after the name.