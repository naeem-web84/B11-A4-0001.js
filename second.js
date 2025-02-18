 
function validEmail(email) {
    const specialChar = [".", "-", "_", "+", "@"];

    if (typeof email !== "string") {
        return "Invalid";
    }

    if (specialChar.includes(email[0]) || !email.includes("@") || email.includes(" ")) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }

    return true;
};
