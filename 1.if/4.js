function calculateTemperature(mode, temperature) {
    console.log(mode, temperature);

    //start solution
    if(mode === 'celcius') {
        return (temperature - 32) / 1.8;
    }
    return (temperature * 1.8) + 32;
    //end

    return 'Hier komt jouw resultaat';
}
