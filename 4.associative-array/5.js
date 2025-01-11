function addFruit(fruits, name, color, taste, calories, carbs, fiber) {
    console.log(fruits, name, color, taste, calories, carbs, fiber);

    fruits.push({
        name: name, //Als zowel key als value hetzelfde zijn, kan je ook gewoon "name," schrijven.
        color: color,
        taste: taste,
        nutrition: {
            calories: calories,
            carbs: carbs,
            fiber: fiber
        }
    });
    
    return fruits;
}