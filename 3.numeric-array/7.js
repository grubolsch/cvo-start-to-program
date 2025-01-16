function addFruit(list, element) {
    console.log(list, element);

    //start solution
    list.push(element)
    //end
}

function showFruits(list, minLength, maxLength) {
    console.log(list, minLength, maxLength);

    //start solution
    minLength = minLength ? parseInt(minLength) : 0;
    maxLength = maxLength ? parseInt(maxLength) : Infinity;

    const validFruits = list.filter(fruit => fruit.length > minLength && fruit.length < maxLength);

    return validFruits.join(', ') || 'Geen geldig fruit';
    //end

    return '';
}