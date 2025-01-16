function addFruit(list, element) {
    console.log(list, element);

    //start solution
    list.push(element)
    //end
}

function removeFruit(list, index) {
    console.log(list, index);

    //start solution
    if (index >= 0 && index < list.length) {
        list.splice(index, 1);
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