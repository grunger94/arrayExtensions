var children = [
	{name: 'ana', sex: 'f'}, 
	{name: 'fosto', sex: 'm'}, 
	{name: 'jane', sex: 'f'}, 
	{name: 'yadi', sex: 'f'}, 
	{name: 'lili', sex: 'f'}, 
	{name: 'bany', sex: 'm'}, 
	{name: 'rod', sex: null}, 
	{name: 'auro', sex: 'f'}, 
	{name: 'martin', sex: 'm'}
], 
people = [
	{name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] }, 
	{name:'juan',age:23,skills:['PHP','Drinktea'] }, 
	{name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
],
logPerson = function(person, i){
	console.log((i + 1) + '.­ ' + person.name + ' is ' + person.age + ' years old')
},
i;

Array.prototype.each = function(callback) {
	for(i = 0; i < this.length; i += 1) {
		callback(this[i], i);
	}

	return this;
};

Array.prototype.where = function(callback) {
	var matches = [];

	console.log(this);

	this.each.call(this, function(x, i) {
		if(callback(x)) {
			matches.push(x);
		}


	});
	
	return matches;
}

Array.prototype.any = function(spec) {
	var match;

	if(spec) {
		if(typeof spec === 'function') {
			this.where(function(x, i) {
				return match = spec(x, i);
			});
		}
		else if(typeof spec === 'string') {
			this.where(function(x, i) {
				return match = (spec == x);
			});
		}
		else {
			throw "Invalid spec format";
		}
	}

	return match || false;
};

Array.prototype.select = function(callback) {
	var excerpts = [];

	this.each(function(x, i) {
		excerpts.push(callback(x));
	});

	return excerpts;
};

Array.prototype.take = function(howMany, spec) {
	var matches = [];

	if(spec && typeof spec === 'function') {
		matches = this.where(spec).slice(0, howMany);
	}
	else {
		matches = this.slice(0, howMany);
	}

	return matches;
};

(function() {
	// var p = people.where(function(person) {
			
	// 	var skills = person.skills.where(function(skill) { 
	// 		return skill == 'PHP'; 
	// 	});

	// 	return skills.length == 0; 
	// })
	// .each(logPerson);

	// var p = people.where(function(person) {
	// 		return person.age >= 26;
	// 	})
	// 	.each(logPerson);
})();
