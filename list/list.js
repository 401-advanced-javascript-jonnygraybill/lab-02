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
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  shift() {
    if (! this.data[0]) { return undefined;}
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  unshift(arr, item) {
    for (let i = arr.length -1; i >= 0; i--) {
      arr[i +1] = arr[i];
    }
    arr[0] = item;
  }

  forEach(callback) {
    if (this.length) {
      for (let i = 0; i <= this.length -1; i++) {
        callback(this[i], i);
      }
    }
  }

  map(callback) {
    if (! this.length) {return undefined;}
    let returnValue = new List();
    for (let i = 0; i < this.length; i++) {
      returnValue.push(callback(this.data[i], i));
    }
    return returnValue;
  }

  filter (callback) {
    if (! this.length) {return undefined;}
    let result = new List();
    for (let i = 0; i <= this.length -1; i++) {
      if (callback(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  }

  reduce(callback, state) {
    if (! this.length) {return undefined;} 
    for ( let i = 0; i <= this.length -1; i++) {
      state = callback(state,this[i], i);
    }
    return state;
  }

}

module.exports = List;
