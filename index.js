// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0,2);
const returnLastTwoDrivers = (arr) => arr.slice(-2);
function createFareMultiplier(n){
    return function (fare){
            return fare*n
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

//fix selectingDrivers +     selectDifferentDrivers(arrayOfDrivers, function)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function selectDifferentDrivers(arr, cb){
    return cb(arr)
}

