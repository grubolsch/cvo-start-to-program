function searchWord(word1, word2) {
    console.log(word1, word2);

    if(word1.includes(word2)){
        return word2 + ' gevonden in '+ word1  + '!';
    }

    return word2 + ' is niet gevonden in '+ word1  + '!';

    return '';
}
