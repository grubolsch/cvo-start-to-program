function showTastes(fruits) {
    console.log(fruits);

    //start solution
    let tastes = fruits.map((fruit) => fruit.taste);
    return [...new Set(tastes)].join(',');
    //end

    return '';
}