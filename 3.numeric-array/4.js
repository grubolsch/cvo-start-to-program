function addFruit(list, element) {
    const validFruits = ["appel", "banaan", "sinaasappel", "peer", "druif", "kiwi", "ananas", "perzik", "mango", "aardbei"];

    console.log(list, element);

    //start solution
    let valid = (validFruits.indexOf(element) > -1);

    if(valid) {
        list.push(element);
    }
    //end

    return valid;
}

function showFruits(list) {
    console.log(list);

    //start solution
    return list.join(',');
    //end

    return '';
}