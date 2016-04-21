module.exports = function(tripList, regNum) {
  var tripsData = null;
  tripList.forEach(function(taxi) {
    if (regNum == taxi.RegistrationNumber) {
      tripsData = tripsData + taxi.Trips;
    };
  })
  return tripsData;
}
