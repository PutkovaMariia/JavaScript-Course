// Remember, we're gonna use strict mode in all scripts now!
'use strict';

function createPhoneNumber(numbers) {
    console.log(`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`)
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude([3, 7, 4, 14, -5]);
console.log(amplitude);

//make the same, just with two arrays
const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 17, 4], [14, -5]);
console.log(amplitudeNew);

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        //value: Number(prompt('Degrees celsius:'))
        value: 7
    }
    console.log(measurement);
    console.table(measurement);
    //console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    return measurement.value + 273;
};
console.log(measureKelvin());
