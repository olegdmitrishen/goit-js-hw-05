'use strict';

class User {
	constructor({ name = 'Name', age = 0, followers = 0 }) {
		this.name = name;
		this.age = age;
		this.followers = followers;
	}

	getInfo = function () {
		console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
	};
}

const mango = new User({
	name: 'Mango',
	age: 2,
	followers: 20
});

const poly = new User({
	name: 'Poly',
	age: 3,
	followers: 17
});

mango.getInfo();
poly.getInfo();
