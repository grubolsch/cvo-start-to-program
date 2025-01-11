function showFruits(fruits, taste) {
    console.log(fruits, taste);

    // Filter fruitsoorten die dezelfde smaak hebben, hoofdletterongevoelig
    return fruits.filter(fruit => fruit.taste.toLowerCase() === taste.toLowerCase());
}