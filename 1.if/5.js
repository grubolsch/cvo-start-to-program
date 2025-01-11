function giveRecommendation(raining, temperature) {
    console.log(raining, temperature);

    if (!raining && temperature > 20 && temperature < 35) {
        return 'Het is een goede dag voor een wandeling';
    } else if (temperature >= 35) {
        return 'Het is te warm voor een wandeling';
    }

    return 'Vandaag liever binnenblijven';

    return '';
}
