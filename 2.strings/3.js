function validateEmail(email) {
    console.log(email);

    //start solution
    return (email.indexOf('@') > 0 && email.lastIndexOf('.') > email.indexOf('@'));
    //end

    return '';
}
