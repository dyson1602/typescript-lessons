const carMakers = ['ford', 'chevy', 'toyota'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['camaro'], ['corolla']];

//Help with type inference

const carOne = carMakers[0];
const myCar = carMakers.pop();

//prvent incompatible values

carMakers.push(100);

//help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']
importantDates.push('2030-10-11')
importantDates.push(new Date())