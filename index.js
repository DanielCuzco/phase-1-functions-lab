// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(feet1, feet2) {
    return Math.abs(feet1-feet2) * 264
}

