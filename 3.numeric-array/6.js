function addFruit(list, element) {
    console.log(list, element);

    list.push(element);
}

function showFruits(list, mode, search) {
    console.log(list, mode, search);

    let fruit;
    let index;

    if (mode === 'value') {
        // Zoek op basis van waarde (fruitnaam)
        index = list.findIndex(item => item === search);
        if (index === -1) {
            return 'Onbekende fruitsoort (bij zoeken op fruit)';
        }
        fruit = list[index];
    } else if (mode === 'index') {
        // Zoek op basis van index
        if (search < 0 || search >= list.length) {
            return 'Onbekende index (bij zoeken op index)';
        }
        fruit = list[search];
        index = search;
    } else {
        return 'Onbekende zoekmodus';
    }

    return 'Fruit ' + fruit + ' heeft als index ' + index;
}
