function calculateNumber(mode, number1, number2) {
    console.log(mode, number1, number2);

    //start solution
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
    //end

    return 'Hier komt jouw resultaat';
}
