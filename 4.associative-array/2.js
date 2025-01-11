function showTastes(fruits) {
    console.log(fruits);

    // Maak een array van smaken en verwijder duplicaten door gebruik te maken van een Set
    let tastes = fruits.map((fruit) => fruit.taste);
    return [...new Set(tastes)].join(',');

    return '';
}