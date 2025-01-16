function translate(phrase, language) {
    // Hier komt jouw code
	console.log(phrase, language);

    if (phrase === 'begroeting' && language === 'ENG') {
        return 'Hello';
    }
    if (phrase === 'begroeting' && language === 'FR') {
        return 'Bonjour';
    }
    if (phrase === 'afscheid' && language === 'ENG') {
        return 'Goodbye';
    }
    if (phrase === 'afscheid' && language === 'FR') {
        return 'Au revoir';
    }
    if (phrase === 'kostprijs' && language === 'ENG') {
        return 'How much does this cost?';
    }
    if (phrase === 'kostprijs' && language === 'FR') {
        return 'Ça coûte combien ?';
    }
		
    return 'Hier komt jouw resultaat';
}
