function addFruit(list, element) {
    console.log(list, element);

    //start solution
    list.push(element)
    //end
}

function showFruits(list) {
    console.log(list);

    //start solution
    return list.sort().join(',');
    //end

    return '';
}