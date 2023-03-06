// creational patron when create object, when constructor is too big 
// better use builder
class Person {
  constructor(name, lastName, age, country, city, hobbies) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
}

class PersonBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setCountry(country) {
    this.country = country;
    return this;
  }

  setCity(city) {
    this.city = city;
    return this;
  }

  addHoby(hobby) {
    this.hobbies.push(hobby);
    return this;
  }

  build() {
    const person = new Person(this.name, this.lastName, this.age, this.country, this.city, this.hobbies);
    this.reset();  
    return person;
  }
}

const personBuilder = new PersonBuilder();
const person = personBuilder.setName('Jhon')
                            .setLastName('Doe')
                            .setAge(30)
                            .setCountry('USA')
                            .setCity('New York')
                            .addHoby('Play guitar')
                            .addHoby('Play soccer')
                            .build();
console.log(person);
console.log(person.getFullName());
