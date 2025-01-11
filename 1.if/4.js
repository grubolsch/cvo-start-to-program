function showBmiCategory(gender, weightInKG, lengthInCm) {
    console.log(gender, weightInKG, lengthInCm);

    let lengteInM = lengthInCm / 100;
    let bmi = weightInKG/(lengteInM * lengteInM);

    if(gender === 'man') {
        if (bmi < 20) {
            return 'Ondergewicht';
        } else if (bmi < 24.9) {
            return 'Normaal gewicht';
        }
    } else { // deze else kan eigenlijk weg, probeer maar!
        if (bmi < 18.5) {
            return 'Ondergewicht';
        } else if (bmi < 24.9) {
            return 'Normaal gewicht';
        }
    }

    if (bmi < 29.9) {
        return 'Overgewicht';
    } else {
        return 'Obesitas';
    }

    return '';
}
