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

(function(Arr) {
	Arr.each = function(callback) {
		for(i = 0; i < this.length; i += 1) {
			callback(this[i], i);
		}

		return this;
	};

	Arr.where = function(callback) {
		var matches = [];

		this.each.call(this, function(x, i) {
			if(callback(x)) {
				matches.push(x);
			}
		});
		
		return matches;
	}

	Arr.any = function(spec) {
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

	Arr.select = function(callback) {
		var excerpts = [];

		this.each(function(x, i) {
			excerpts.push(callback(x));
		});

		return excerpts;
	};

	Arr.take = function(howMany, spec) {
		var items = [];

		if(spec && typeof spec === 'function') {
			items = this.where(spec).slice(0, howMany);
		}
		else {
			items = this.slice(0, howMany);
		}

		return items;
	};

	Arr.skip = function(howMany) {
		var items = [];

		matches = this.slice(howMany, this.length);

		return matches;
	};

	Arr.first = function(spec) {
		var elem = null;

		if(spec && typeof spec === 'function') {
			elem = this.where(spec)[0];
		}
		else {
			elem = this[0];
		}

		return elem;
	};

	Arr.last = function(spec) {
		var elem = null;

		if(spec && typeof spec === 'function') {
			this.reverse();
			elem = this.first(spec);
		}
		else {
			elem = this[this.length - 1];
		}

		return elem;
	};

	Arr.count = function(spec) {
		var count = 0;

		if(spec && typeof spec === 'function') {
			this.each(function(x, i) {
				if(spec(x)) {
					count++;
				}
			});
		}
		else {
			count = this.length;
		}

		return count;
	};

	Arr.index = function(spec) {
		var ix = -1;

		if(spec && typeof spec === 'function') {
			this.each(function(x, i) {
				if(spec(x)) {
					ix = i;
				}
			});
		}
		else {
			ix = this.indexOf(spec);
		}

		return ix;
	};

	Arr.pluck = function(spec) {
		var array = [];

		if(spec && typeof spec === 'string') {
			this.each(function(x, i) {
				if(x.hasOwnProperty(spec)) {
					array.push(x[spec]);
				}
			});
		}

		return array;
	};
}(Array.prototype));


(function() {
	console.log(children.pluck('name'));
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
