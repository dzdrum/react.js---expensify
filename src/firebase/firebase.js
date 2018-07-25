import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB9LVT8eY6sewV-H4zCkbU3q-eHDGHcR68",
    authDomain: "expensify-app-34040.firebaseapp.com",
    databaseURL: "https://expensify-app-34040.firebaseio.com",
    projectId: "expensify-app-34040",
    storageBucket: "expensify-app-34040.appspot.com",
    messagingSenderId: "541688959421"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

//all of this below was just practice to work with firebase

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

//child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses)
//   });



// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('expenses').push({
//   description: 'New Expense',
//   note: 'This is a practice expense',
//   amount: '$500.00',
//   createdAt: 5
// });


// database.ref('notes/-LHhcuqjtKv_pe5NwP82').remove();

// database.ref('notes').push({
//   title: 'Course Tipics',
//   body: 'React and Redux'
// });


// database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })


// database.ref().set({
//   name: 'Dylan Drum',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Charlotte',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e)
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('removed sucessfully');
// }).catch((e) => {
//   console.log('remove failed', e)
// })
