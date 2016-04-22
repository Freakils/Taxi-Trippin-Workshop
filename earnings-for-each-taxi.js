module.exports = function(tripList) {
  var earningsForEach = {};
  tripList.forEach(function(taxi) {
    var regNum = taxi.RegistrationNumber;
    var newEarnings = taxi.Fare * taxi.Trips;

    if (earningsForEach[regNum] === undefined) {
      earningsForEach[regNum] = 0;
    }
    earningsForEach[regNum] += newEarnings;
  // console.log(regNum);

  });
  return earningsForEach;
}
