function login(correctUsername, correctPassword, newUsername, newPassword) {
    console.log(correctUsername, correctPassword, newUsername, newPassword);

    return newUsername === correctUsername && newPassword === correctPassword;
}

function isRegisterValid(username, password, password2) {
    console.log(username, password, password2);

    if (password !== password2) {
        return 'Wachtwoord niet hetzelfde.';
    }

    if (username.length < 4) {
        return 'Gebruikersnaam moet minstens 4 tekens lang zijn.';
    }

    if(password.length < 6) {
        return 'Wachtwoord moet minstens 6 tekens lang zijn.';
    }

    return true;
}