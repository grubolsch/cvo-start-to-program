function addFruit(list, element) {
    console.log(list, element);

    list.push(element);
}

function showFruits(list) {
    console.log(list);

    return list.sort().join(',');

    return '';
}