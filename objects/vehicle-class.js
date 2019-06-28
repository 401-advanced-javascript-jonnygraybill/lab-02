'use strict';

class Vehicle {
  constructor(name, wheels) {
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

class Car extends Vehicle {
  constructor(name) {
    super(name, 4)
  }
}

class Motorcycle extends Car {
  constructor(name) {
    super(name, 2)
  }
  wheelie() {
    return 'Wheee!'
  }
}

module.exports = { Car, Motorcycle };