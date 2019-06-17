'use strict';

function calculateMe(form) {
    const vacation = form.vacationDays.value;

    if ( vacation < 0 || isNaN(vacation) ) {
        alert('!!! Wrong data !!!');
        return;
    }

    const computedPrice = calculateMyPayment(vacation);
    const computedTrickyPrice = calculateTrickyPayment(vacation);

    alert('Your manager gives you $' + computedPrice[0] + ' off. And your payment will be $' + computedPrice[1] + '.');

    if (computedPrice[0] < computedTrickyPrice[0]) {
        alert('BUT! If you\'ll be a little tricky...');
        if (computedTrickyPrice[4] > 0) {
            alert('And you\'ll rent a car: \n' + computedTrickyPrice[2] + ' times for 3 days, \n' + computedTrickyPrice[3] + ' times for 7 days and \n for ' + computedTrickyPrice[4] + ' days more...');
        } else {
            alert('And you\'ll rent a car: \n' + computedTrickyPrice[2] + ' times for 3 days and \n' + computedTrickyPrice[3] + ' times for 7 days...');
        }
        alert('There\'s nothing left to your manager but to offer you a $' + computedTrickyPrice[0] + ' discount. And you will pay $' + computedTrickyPrice[1] + ' for renting a car.')
    }
}

function calculateMyPayment (vacationDays) {
    const offer = [];
    if (vacationDays >= 7) {
        offer[0] = 50;
        offer[1] = vacationDays * 40 - 50;
    } else if (vacationDays >= 3) {
        offer[0] = 20;
        offer[1] = vacationDays * 40 - 20;
    } else {
        offer[0] = 0;
        offer[1] = vacationDays * 40;
    }
    return offer;
}


function calculateTrickyPayment (vacationDays) {
    const tricky = [];
    let days = vacationDays;
    let discount = 0;
    let payment = days * 40;
    let threeDaysPeriod = 0;
    let sevenDaysPeriod = 0;

    while (days >= 3 && days % 7 != 0) {
        discount += 20;
        threeDaysPeriod ++;
        days -= 3;
    }
    
    sevenDaysPeriod = Math.trunc(days / 7);
    discount += sevenDaysPeriod * 50;
    payment -= discount;
    days = days % 7;

    tricky = [discount, payment, threeDaysPeriod, sevenDaysPeriod, days];
    return tricky;
}
