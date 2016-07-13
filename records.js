module.exports = function(tripList, RegNumber) {
  var data = [];
  tripList.forEach(function(reg) {
    if (reg.RegistrationNumber === RegNumber) {
      data.push(reg);
    }
  })
  console.log(data);
  return data;
}
