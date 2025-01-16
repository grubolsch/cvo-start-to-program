function addFruit(list, element) {
    console.log(list, element);

    //start solution
    list.push(element)
    //end
}
function showFruits(list, mode) {
    console.log(list);

    //start solution
    return list.map(element => {
        if(mode === 'upper') {
            return element.toUpperCase();
        }

        return element.toLowerCase();
    }).join(',');
    //end

    return '';
}