const person = Object.freeze({
  name: 'Kyle',
  age: 3
}


console.log(person);
person.name = 'Sis';
console.log(person);
