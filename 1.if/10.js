function login(correctUsername, correctPassword, newUsername, newPassword) {
    console.log(correctUsername, correctPassword, newUsername, newPassword);

    //start solution
    return newUsername === correctUsername && newPassword === correctPassword;
    //end
}

function isRegisterValid(username, password, password2) {
    console.log(username, password, password2);

    //start solution
    if (password !== password2) {
        return 'Wachtwoord niet hetzelfde.';
    }

    if (username.length < 4) {
        return 'Gebruikersnaam moet minstens 4 tekens lang zijn.';
    }

    if(password.length < 6) {
        return 'Wachtwoord moet minstens 6 tekens lang zijn.';
    }
    //end

    return true;
}