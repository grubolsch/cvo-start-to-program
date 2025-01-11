function showFruits(fruits, calories, carbs, fiber) {
    console.log(fruits, calories, carbs, fiber);

    return fruits.find(fruit =>
        fruit.nutrition.calories === calories &&
        fruit.nutrition.carbs === carbs &&
        fruit.nutrition.fiber === fiber
    );
}