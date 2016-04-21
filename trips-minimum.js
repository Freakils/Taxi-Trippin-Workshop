module.exports = function(tripList) {

  var minTrips = 100;
  tripList.forEach(function(trips) {
    if (trips.Trips < minTrips) {

      minTrips = trips.Trips;
    }
  });
  // console.log(minTrips)
  return minTrips;
};
