function replace(word, start, end) {
    console.log(word, start, end);

    //start solution
    if (start < 0 || end > word.length || start > end) {
        return 'Ongeldige start- of eindpositie';
    }

    const before = word.slice(0, start-1).toLowerCase();
    const middle = word.slice(start-1, end).toUpperCase();
    const after = word.slice(end).toLowerCase();

    return before + middle + after;
    //end

    return '';
}
