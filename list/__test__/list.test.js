'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
const faker = require('faker');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops things off of the end of the array', () => {
    let array = new List();
    array.push('a');
    array.push('b');
    array.push('c');
    expect(array.pop()).toEqual('c');
  });

  it('shifts to remove first item in the array', () =>{
    let list = new List();
    let array = [1,2,3,4,5,6,7,8,9,10];
    array.forEach(item => list.push(item));
    expect(list.shift()).toEqual(1);
  });

  it('unshifts to put things at the beginning of the array', () => {
    let items = new List();
    let array = [faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement()];
    array.forEach(item => items.push(item));
    expect(items.shift()).toEqual(array.shift());
  });

  it('foreach will go through each position in the array', () => {
    let arr = [1,2,3,4,5];
    let items = new List();
    arr.forEach(item => items.push(item));
    expect(items.forEach((item,idx) => (item,idx))).toEqual(arr.forEach((item,idx) => (item, idx)));
  });

  it('Map method will make a copy of an array, and will do things to it', () => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let items = new List();
    let list = new List();
    arr.forEach(item => items.push(item));
    let sqArr = arr.map(item => item * item);
    sqArr.forEach(item => list.push(item));
    expect(items.map(item => item* item)).toEqual(list.data);
  });

  it('Filter will make a copy and go through the array and return things that qualify', () => {
    let arr = [1,2,20,70,80,6,12,95,123];
    let filterArray = arr.filter(val => val % 2);
    let items = new List();
    let list = new List();
    arr.forEach(item => items.push(item));
    filterArray.forEach(item => list.push(item));
    expect(items.filter(val => val%2)).toEqual(list.data);
  });

  it('Reduce will go through the array and reduce to one value by using an accumulator ', () => {
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let reduced = array.reduce((acc,val,idx,arr) => {
      return acc+val;
    },0);
    let items = new List();
    array.forEach(item => items.push(item));
    expect(items.reduce((acc,val,idx,arr) => {
      return acc+val;
    }, 0))
      .toEqual(reduced);
  });

});
