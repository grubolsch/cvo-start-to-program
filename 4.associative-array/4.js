function showFruits(fruits, calories, carbs, fiber) {
    console.log(fruits, calories, carbs, fiber);

    //start solution
    return fruits.find(fruit =>
        fruit.nutrition.calories === calories &&
        fruit.nutrition.carbs === carbs &&
        fruit.nutrition.fiber === fiber
    );
    //end
}