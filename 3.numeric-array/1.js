function addFruit(list, element) {
    console.log(list, element);

    list.push(element)
}

function removeFruit(list, index) {
    console.log(list, index);

    if (index >= 0 && index < list.length) {
        list.splice(index, 1);
    }
}

function showFruits(list) {
    console.log(list);

    return list.join(',');

    return '';
}