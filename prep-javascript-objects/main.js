const person = {
  firstName: 'Tigran',
  lastName: 'Mkrtchyan',
  hobby: 'Coding'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is " + fullName);

person.job = 'Office job';
console.log("The person's current job is " + person.job);

person.previousJob = 'unemployed';
console.log("The person's previous job is " + person.previousJob);
console.log(person);
