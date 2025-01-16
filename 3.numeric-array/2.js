function addFruit(list, element) {
    console.log(list, element);

    //start solution
    list.push(element)
    //end
}

function changeFruit(list, index, newFruit) {
    console.log(list, index, newFruit);

    //start solution
    if (index >= 0 && index < list.length) {
        list.splice(index, 1, newFruit);
    }
    //end
}

function showFruits(list) {
    console.log(list);

    //start solution
    return list.join(',');
    //end

    return '';
}