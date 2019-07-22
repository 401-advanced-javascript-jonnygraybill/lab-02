'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length - 1];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  /**
   * 
   * @returns
   */
  shift() {
    let beginning = this.data[0];
    delete this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[--this.length];
    return beginning;
  }

  /**
   * 
   * @returns
   */
  unshift(arr) {
    let newData = new List();
    newData.push(arr);
    for (let i = 0; i < this.length; i++) {
      newData.push(this.data[i]);
    }
    this.data = newData.data;
    this.length++;
    return this.length;
  }

  /**
   * 
   * @returns
   */
  forEach(callback) {
    if (this.length) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  /**
   * 
   * @returns
   */
  map(callback) {
    let response = new List();
    for (let i = 0; i < this.length; i++) {
      response.push(callback(this.data[i], i, this.data));
    }
    return response.data;
  }

  /**
   * 
   * @returns
   */
  filter(callback) {
    let response = new List();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this.data)) { response.push(this.data[i]); }
    }
    return response.data;
  }

  /**
   * 
   * @returns
   */
  reduce(callback, state) {
    let accum = state;
    for (let i = 0; i < this.length; i++) {
      accum = callback(accum, this.data[i], i, this.data);
    }
    return accum;
  }
}

module.exports = List;
