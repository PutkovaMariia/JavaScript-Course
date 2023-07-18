'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers){//default price set to 199 multiplied to the number of passengers(which was set before)-- works only when value we are working with (numPassengers) was set before value we assigning it to
    //ES5 way to set default values
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');//{ flightNum: 'LH123', numPassengers: 1, price: 199 } -- with default values
createBooking('H123', 2, 800);//{ flightNum: 'H123', numPassengers: 2, price: 800 }
createBooking('N900', 5);//{ flightNum: 'N900', numPassengers: 5, price: 995 } -- the price was calculated from default value
//createBooking('fff', , 1000); -- doesn't work because we can't skip parameters this way
createBooking('fff', undefined, 1000);//{ flightNum: 'fff', numPassengers: 1, price: 1000 } -- only way to skip the parameter is to set it to undefined (is false and we need to take default value instead)
