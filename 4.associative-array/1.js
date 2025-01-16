function showFruits(fruits, mode) {
    console.log(fruits, mode);

    //start solution
    fruits.sort((a, b) => a.nutrition.calories - b.nutrition.calories);

    if (mode === 'DOWN') {
        fruits.reverse();
    }
    //end

    return fruits;
}