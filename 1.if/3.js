function calculateNumber(mode, number1, number2) {
    // Hier komt jouw code

    switch(mode) {
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
            break;
        case '*':
            return number1 * number2;
            break;
        case '/':
            return number1 / number2;
            break;
    }

    console.log(mode, number1, number2);
    return 'Hier komt jouw resultaat';
}
