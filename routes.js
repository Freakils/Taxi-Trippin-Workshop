module.exports = function(tripList, regNum) {
  var routesData = [];
  tripList.forEach(function(taxi) {
    if (regNum === taxi.RegistrationNumber) {
      // routesData = routesData + taxi.Routes;
      routesData.push(taxi.Route);
    };
  })
  return routesData;
}
