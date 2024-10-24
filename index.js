
const drivers =  ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(driver){return[...drivers].slice(null, 2)};

const returnLastTwoDrivers = function(drivers) {return[...drivers].splice(2)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare) {return fare * multiplier};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectionFunction){
    return selectionFunction(drivers);
   
}