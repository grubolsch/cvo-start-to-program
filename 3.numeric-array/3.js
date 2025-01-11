function addFruit(list, element) {
    console.log(list, element);

    list.push(element);
}

function showFruits(list, mode) {
    console.log(list);

    return list.map(element => {
        if(mode === 'upper') {
            return element.toUpperCase();
        }

        return element.toLowerCase();
    }).join(',');

    return '';
}