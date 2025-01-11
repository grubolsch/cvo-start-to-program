function addFruit(list, element) {
    const validFruits = ["appel", "banaan", "sinaasappel", "peer", "druif", "kiwi", "ananas", "perzik", "mango", "aardbei"];

    console.log(list, element);

    let valid = (validFruits.indexOf(element) > -1);

    if(valid) {
        list.push(element);
    }

    return valid;
}

function showFruits(list) {
    console.log(list);

    return list.join(',');

    return '';
}