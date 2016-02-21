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
];

(function(Arr) {
	var array = [], arrayFlatten = [], elem;

	Arr.each = function(callback) {
		var stop;

		for(var i = 0; i < this.length; i += 1) {
			stop = callback(this[i], i, this);

			if(stop === true)
				break;
		}

		return this;
	};

	Arr.where = function(callback, howMany) {
		var matches = [];

		this.each(function eachCB(x) {
			if(callback(x)) {
				matches.push(x);

				if(howMany == matches.length) {
					return true;
				}
			}
		});
		
		return matches;
	}

	Arr.any = function(spec) {
		var match;

		if(spec) {
			if(typeof spec === 'function') {
				this.where(function(x) {
					return match = spec(x);
				}, 1);
			}
			else if(typeof spec === 'string') {
				this.where(function whereCB(x) {
					return match = (spec == x);
				}, 1);
			}
			else {
				throw "Invalid spec format";
			}
		}

		return match || false;
	};

	Arr.select = function(callback) {
		array = [];

		this.each(function(x) {
			array.push(callback(x));
		});

		return array;
	};

	Arr.take = function(howMany, spec) {
		array = [];

		if(spec && typeof spec === 'function') {
			array = this.where(spec, howMany);
		}
		else {
			array = this.slice(0, howMany);
		}

		return array;
	};

	Arr.skip = function(howMany) {
		return this.slice(howMany, this.length);
	};

	Arr.first = function(spec) {
		elem = null;

		if(this.length > 0) {
			if(spec && typeof spec === 'function') {
				elem = this.where(spec);
				elem = elem.length > 0 ? elem[0] : null;
			}
			else {
				elem = this[0];
			}
		}

		return elem;
	};

	Arr.last = function(spec) {
		elem = null;

		if(this.length > 0) {
			if(spec && typeof spec === 'function') {
				this.reverse();
				elem = this.first(spec);
			}
			else {
				elem = this[this.length - 1];
			}
		}

		return elem;
	};

	Arr.count = function(spec) {
		var count = 0;

		if(spec && typeof spec === 'function') {
			this.each(function(x) {
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
					return true;
				}
			});
		}
		else {
			ix = this.indexOf(spec);
		}

		return ix;
	};
	
	// console.log(children.index(function(x) { return x.name == 'bany'; }));

	Arr.pluck = function(spec) {
		array = [];

		if(spec && typeof spec === 'string') {
			this.each(function(x) {
				if(x.hasOwnProperty(spec)) {
					array.push(x[spec]);
				}
			});
		}

		return array;
	};

	Arr.sum = function(spec) {
		var result = 0;

		if(spec && typeof spec === 'function') {
			this.each(function(x) {
				result += spec(x);
			});
		}
		else {
			this.each(function(x) {
				result += (x);
			});
		}

		return result;
	};

	Arr.max = function(comparer) {
		var max, b, res;

		if(comparer && typeof comparer == "function") {
			this.each(function(a, i, origin) {
				if(origin[i + 1]) {
					if(max) {
						a = max;
					}
					else {
						max = a;
					}

					b = origin[i + 1];

					res = comparer(a, b);
					
					if(res <= 0) {
						max = b;
					}
				}
			});
		} 
		else {
			this.each(function(x) {
				if(max == undefined || x > max) {
					max = x;
				}
			});
		}
		
		return max;
	};

	Arr.min = function(comparer) {
		var min, b, res;

		if(comparer && typeof comparer == "function") {
			this.each(function(a, i, origin) {
				if(origin[i + 1]) {
					if(min) {
						a = min;
					}
					else {
						min = a;
					}

					b = origin[i + 1];

					res = comparer(a, b);
					
					if(res >= 0) {
						min = b;
					}
				}
			});
		} 
		else {
			this.each(function(x) {
				if(min == undefined || x < min) {
					min = x;
				}
			});
		}
		
		return min;
	};

	Arr.flatten = function() {
		arrayFlatten = arrayFlatten || [];

		this.each(function(x) {		
			if(x instanceof Array) {
				Arr.flatten.call(x);
			}
			else {
				arrayFlatten.push(x);
			}
		});

		return arrayFlatten;
	};
}(Array.prototype));