function showFruits(fruits, mode) {
    console.log(fruits, mode);

    fruits.sort((a, b) => a.nutrition.calories - b.nutrition.calories);

    if (mode === 'DOWN') {
        fruits.reverse();
    }

    return fruits;
}