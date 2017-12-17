// function Item(name) {
//   var obj = {};
//   obj.name = name;
//   obj.completed = false;
//   obj.important = false;
//   obj.makeImportant = function() {
//     this.important = !this.important;
//   }
//   return obj;
// };

// var item1 = Item('shopping');
// console.log(item1);

// item1.makeImportant();
// console.log(item1);

// Item.prototype



// var arr1 = [1, 2, 3, 4];

// Make a Constructor Toyota
// It should accept model and color
// It should accept model and color when creating a unique object
// shared key is make = toyota
// create an inherited function called drive
// which logs Driving a Silver Toyota Corrolla


// function Toyota(model, color) {
//   this.make = 'toyota';
//   this.model = model;
//   this.color = color;
//   var mileage = 0
// }

// var myCar = new Toyota('Corrolla', 'Silver')
// Toyota.prototype.drive = function () {
//   console.log(`Driving a ${this.color} ${this.make} ${this.model}`)
// }
// console.log(myCar.drive());



class Test {
  constructor(model, color) {
    this.make = 'toyota';
    this.model = model;
    this.color = color;
  }
  drive(){
    console.log(`Driving a ${this.color} ${this.make} ${this.model}`)
  }
}
var myCar = new Test('Camry', 'White');
console.log(myCar.drive())

