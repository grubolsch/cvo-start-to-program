function validateEmail(email) {
    console.log(email);

    return (email.indexOf('@') > 0 && email.lastIndexOf('.') > email.indexOf('@'));

    return '';
}
