/*
Array.prototype.each = function(callback) {
	if(callback && typeof callback === 'function') {
		for(i = 0; i < this.length; i += 1) {
			callback.call(this, i);
		}
	}
	
	return this;
}
*/

var people = [
	{name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] }, 
	{name:'juan',age:23,skills:['PHP','Drinktea'] }, 
	{name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
],
logPerson = function(person, i){
	console.log((i + 1) + '.­ ' + person.name + ' is ' + person.age + ' years old')
},
i;

Array.prototype.each = function(callback) {
	if(callback && typeof callback === 'function') {
		for(i = 0; i < this.length; i += 1) {
			callback(this[i], i);
		}
	}
	
	return this;
}

Array.prototype.where = function(callback) {
	var matches = [];

	this.each(function(x, i) {
		if(callback(x)) {
			matches.push(x);
		}
	});
	
	return matches;
}

/*
Array.prototype.where = function(callback) {
	var matches = [];

	if(callback && typeof callback === 'function') {
		for(var i = 0; i < this.length; i += 1) {
			if(callback(this[i], i)) {
				matches.push(this[i]);
			}
		}
	}

	return matches;
}
*/
Array.prototype.any = function(spec) {
	var found;

	if(spec) {
		for(var i = 0; i < this.length; i += 1) {
			if(typeof spec === 'function') {
				if(spec(this[i], i)) {
					found = true;
					break;
				}
			}
			else if(typeof spec === 'string') {
				if(spec == this[i]) {
					found = true;
					break;
				}
			}
		}
	}

	return found || false;
}

Array.prototype.select = function(callback) {
	var excerpts = [];

	if(callback && typeof callback === 'function') {
		for(var i = 0; i < this.length; i += 1) {
			excerpts.push(callback(this[i]));
		}
	}

	return excerpts;
}