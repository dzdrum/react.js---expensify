// const person = {
//     name: "Dylan",
//     age: 20,
//     location: {
//         city: "Charlotte",
//         temp: 100
//     }
// };


// const { name = "name", age } = person;
// //const name = person.name;
// //const age= person.age;

// console.log(`${name} is ${age}`)

// const { temp: temperature, city } = person.location
// if(city && temperature) {
//     console.log(`Its ${temperature} in ${city}`);
// }


// const book= {
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//array destructuring

const address = ['10303 Kristen Mare Drive', 'Charlotte', 'North Carolina', '28277'];
const [, city, state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , price] = item
console.log(`A medium ${drink} costs ${price}`)