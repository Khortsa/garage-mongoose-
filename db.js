var express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/garage");
const { Schema } = mongoose;

const carSchema = Schema({
  marque: "String",
  model: "String",
  year: Number,
});
const Car = mongoose.model("Car", carSchema);

// const renault = new Car(
//  {
//     marque: 'Renault',
//     model: 'Espace',
//     year: 1999
// });

// const renault2 = new Car(
//     {
//         marque: 'Renault',
//         model: 'Scenic',
//         year: 2004
//  });

//  const peugot = new Car(
//      {   marque: 'Peugot',
//          model: '308',
//          year: 2017
//         });

// const cars = [ renault, renault2, peugot]
// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
//     cars[i].save().then(res => console.log(res))
// }

// cars.forEach(car => {console.log(car)
//     car.save().then(res => console.log(res))
// });
// }
// Car.findById('626987919cdbe06a1fdab480', (err, res) => {

//     console.log('This is mark and model', res.marque, res.model);
// });

// Car.updateOne({_id:'626987919cdbe06a1fdab480' }, {$set: {year: 2000}}, function(err) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated.");
//     }
//   });
//   Car.deleteMany({ marque: "Renault"}, function(err){
//     if(err) {
//         console.log(err);
//       } else {
//         console.log("Successfully deleted");
//       }
//   });
Car.insertMany([
  {
    marque: "Aston Martin",
    modèle: "DB9",
    year: 2010,
  },
  {
    marque: "Range rover",
    modèle: "Discovery Sport",
    year: 2017,
  },
])
  .then(function () {
    console.log("Data added");
  })
  .catch(function (error) {
    console.log(error);
  });
