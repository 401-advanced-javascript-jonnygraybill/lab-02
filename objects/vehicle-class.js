'use strict';


class Vehicle {
  constructor (name, wheels) {
  this.name = name;
  this.wheels = wheels;
  }
  drive() {
    return 'Moving forward';
  }
  stop() {
    return 'Stopping'
  }
};


//Car class
class Car extends Vehicle {
//Creating a new car - store it's name
  constructor (name){
  super(name,4)
  }
}

class Motorcycle extends Car {
  constructor (name) {
  super(name,2)
  }
  wheelie() {
    return 'Wheee!'
  }
}

// Car Constructor
// const Car = function(name) {
//   Vehicle.call(this, name, 4);
// };

// Car.prototype = new Vehicle();

// const Motorcycle = function(name) {
//   Vehicle.call(this,name,2);
// };

// Motorcycle.prototype = new Vehicle();

// Motorcycle.prototype.wheelie = () => {
//   return 'Wheee!';
// };

module.exports = {Car, Motorcycle};