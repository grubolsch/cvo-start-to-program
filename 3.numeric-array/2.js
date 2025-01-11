function addFruit(list, element) {
    console.log(list, element);

    list.push(element)
}

function changeFruit(list, index, newFruit) {
    console.log(list, index, newFruit);

    if (index >= 0 && index < list.length) {
        list.splice(index, 1, newFruit);
    }
}

function showFruits(list) {
    console.log(list);

    return list.join(',');

    return '';
}