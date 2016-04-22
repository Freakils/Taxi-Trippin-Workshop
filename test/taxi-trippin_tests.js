// var hello = require('./hello');
// var assert = require('assert');
//
// describe('test for hello', function(){
//
//     it('it should say hello', function(){
//         assert.equal(hello(), "hello world!");
//     });

var tripsTotal = require("../trips-total");
var tripsMinimum = require("../trips-minimum");
var records = require("../records");
var tripsForTaxi = require("../trips-for-taxi");
var routes = require("../routes");
var totalEarnings = require("../total-earnings");
var earningsForEachTaxi = require("../earnings-for-each-taxi")
var assert = require("assert");

var capeTownTaxis = [{
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Bellville",
  "Fare": 13,
  "Trips": 9
}, {
  "RegistrationNumber": "CA 234 567",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Langa",
  "Fare": 8,
  "Trips": 13
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Cape Town",
  "Fare": 13,
  "Trips": 10
}];

var durbanTaxis = [{
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 18
}, {
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 15
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 20
}];

describe("How many trips did all the taxis make?", function() {
  it("should show total/how many trips did all the taxis make", function() {
    assert.equal(tripsTotal(capeTownTaxis), 54);
  });
  it("should show total/how many trips did all the taxis make", function() {
    assert.equal(tripsTotal(durbanTaxis), 117)
  });
});

describe("What’s the lowest number of trips that any taxi made?", function() {
  it("should show me the lowest number of trips that any taxi in Cape Town made", function() {
    assert.equal(tripsMinimum(capeTownTaxis), 9);
  });
  it("should show me the lowest number of trips that any taxi in Durban made", function() {
    assert.equal(tripsMinimum(durbanTaxis), 9);
  });
});

describe("What records do we have for CA 123 456 and taxi ND 123 456?", function() {
  it("should show me all records of taxi CA 123 456", function() {
    assert.deepEqual(records(capeTownTaxis, "CA 123 456"), [{
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Bellville",
      "Fare": 13,
      "Trips": 9
    }, {
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Gugulethu",
      "Fare": 12,
      "Trips": 11
    }]);
  });
  it("should show me all records of taxi ND 123 456", function() {
    assert.deepEqual(records(durbanTaxis, "ND 123 456"), [{
      "RegistrationNumber": "ND 123 456",
      "Route": "Durban - University of KZN",
      "Fare": 7,
      "Trips": 14
    }, {
      "RegistrationNumber": "ND 123 456",
      "Route": "Durban - Umbilo",
      "Fare": 8,
      "Trips": 15
    }]);
  });
});

describe("How many trips did CA 234 567 and ND 234 567 make?", function() {
  it("should show the number of trips made by taxis CA 234 567", function() {
    assert.equal(tripsForTaxi(capeTownTaxis, "CA 234 567"), 11);
  });

  it("should show the number of trips made by taxis ND 234 567", function() {
    assert.equal(tripsForTaxi(durbanTaxis, "ND 234 567"), 36);
  });
});

describe("What are the names of all the routes that CA 345 678 and ND 345 678 took?", function() {
  it("it should show the routes for taken by taxi CA 345 678", function() {
    assert.deepEqual(routes(capeTownTaxis, "CA 345 678"), ["Cape Town - Langa", "Cape Town - Cape Town"]);
  });
  it("it should show the routes for taken routes by taxi ND 345 678", function() {
    assert.deepEqual(routes(durbanTaxis, "ND 345 678"), ["Durban - Umbilo", "Durban - University of KZN", "Durban - Umlazi Station"])
  });
});

describe("What are the total earnings for CA 234 567 and ND 234 567?", function() {
  it("should give the total earnings for taxi CA 234 567", function() {
    assert.equal(totalEarnings(capeTownTaxis, "CA 234 567"), 132)
  });
  it("should give the total earning for taxi ND 234 567", function() {
    assert.equal(totalEarnings(durbanTaxis, "ND 234 567"), 387)
  });
});

describe("What are the total earnings for each taxi?", function() {
  it("should give the total earnings for each taxi in CPT", function() {
    assert.deepEqual(earningsForEachTaxi(capeTownTaxis), {
      "CA 123 456": 249,
      "CA 234 567": 132,
      "CA 345 678": 234
    });
  });
  it("should give the total earnings for each taxi in DBN", function(){
    assert.deepEqual(earningsForEachTaxi(durbanTaxis), {
      "ND 123 456": 218,
      "ND 234 567": 387,
      "ND 345 678": 518
    });
  });

});
