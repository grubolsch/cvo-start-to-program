function showFruits(fruits, taste) {
    console.log(fruits, taste);

    //start solution
    return fruits.filter(fruit => fruit.taste.toLowerCase() === taste.toLowerCase());
    //end
}