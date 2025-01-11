function calculateTemperature(mode, temperature) {
    console.log(mode, temperature);

    if(mode === 'celcius') {
        return (temperature - 32) / 1.8;
    }
    return (temperature * 1.8) + 32;

    return 'Hier komt jouw resultaat';
}
