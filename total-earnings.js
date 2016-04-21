module.exports = function(tripList, regNum){
  var totalEarnings = 0;
    tripList.forEach(function(taxi){
      if(taxi.RegistrationNumber === regNum){
        totalEarnings = totalEarnings + taxi.Fare*taxi.Trips;
      }
    });
    return totalEarnings;
}
