function getFrequency(frequency) {
    console.log(frequency);

    // Gebruik een switch-statement om de frequentie te bepalen

    //start solution
    switch (frequency) {
        case 'C':
            return 261.63; // Do
        case 'D':
            return 293.66; // Re
        case 'E':
            return 329.63; // Mi
        case 'F':
            return 349.23; // Fa
        case 'G':
            return 392.00; // Sol
        case 'A':
            return 440.00; // La
        case 'B':
            return 493.88; // Si
        default:
            return 0;
    }
    //end
}