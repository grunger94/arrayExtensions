describe("Each", function() {
	var f = function() {};

    it("should receive a valid callback function", function() {
    	people.each(f);

    	expect(f).toBeDefined();
    	expect(typeof f).toBe('function');
    });

    it("should return context", function() {
    	var b = people.each(f);

    	expect(b).toEqual(people);
    });
});

describe("Where", function() {
    it("should create a new array with the set of matching elements", function() {
		var p = people.where(function(person) {
			
			var skills = person.skills.where(function(skill) { 
				return skill == 'PHP'; 
			});

			return skills.length == 0; 
		});

		expect(p instanceof Array).toBeTruthy();
		expect(p.length).toEqual(2);
	});
});

describe("Any", function() {
	it("should return a boolean value", function() {
		var dev = people[0];
		
		var found = dev.skills.any(function(skill) { 
			return skill == 'PHP'; 
		});

		expect(typeof found).toBe('boolean');
	});

    it("should return true since the spec has a match", function() {
		var dev = people[1];
		
		var found = dev.skills.any(function(skill) { 
			return skill == 'PHP'; 
		});

		expect(found).toBeTruthy();

	});

	it("should return false since the spec has no matches", function() {
		var dev = people[2];
		
		var found = dev.skills.any(function(skill) { 
			return skill == 'PHP'; 
		});

		expect(found).toBeFalsy();
	});

	it("should match strings too", function() {
		var dev = people[1];
		
		var found = dev.skills.any('PHP');

		expect(found).toBeTruthy();
	});
});

describe("Select", function() {
	it("should return an array with the name of the developers who have PHP skills", 
		function() {
		var p = people.where(function(dev) {
			return !dev.skills.any('PHP'); 
		})
		.select(function(dev) {
			return dev.name; 
		});

		expect(p).toEqual(["pedro", "pablo"]);
	});

	it("should create a new collection", function() {
		var p = people.where(function(dev) {
			return !dev.skills.any('PHP'); 
		})
		.select(function(dev) {
			return dev.name; 
		});

		expect(p instanceof Array).toBeTruthy();
		expect(p).not.toEqual(people);
	});
});

describe("Take", function() {
	it("should return a new array", function() {
		var ch = children.take(3, function(x) { return x.sex == 'f'; })
		.select(function(dev) {
			return dev.name; 
		});

		expect(ch instanceof Array).toBeTruthy();
		expect(ch).not.toEqual(children);
	});

	it("should return an array with the first howMany elements if spec is not present", 
		function() {
		var ch = children.take(3)
		.select(function(dev) {
			return dev.name; 
		});

		expect(ch).toEqual(["ana", "fosto", "jane"]);
	});

	it("should return an array containing at most howMany elements matching the spec", 
		function() {
		var ch = children.take(3, function(x) { return x.sex == 'f'; })
		.select(function(dev) {
			return dev.name; 
		});

		expect(ch).toEqual(["ana", "jane", "yadi"]);
	});
});

describe("Skip", function() {
	it("should return an array containing all of its items but the first howMany", 
		function() {
		var ch = children.skip(6)
		.select(function(p) {
 			return p.name; 
 		});

		expect(ch).toEqual(["rod", "auro", "martin"]);
	});
});

describe("First", function() {
	it("should return the very first element in the array if no spec is provided", 
		function() {
		var name = children.first().name;

		expect(name).toEqual("ana");
	});

	it("should return the first element that matches the spec when provided", 
		function() {
		var name = children.first(function(x){ return x.sex == 'm'; }).name;

		expect(name).toEqual("fosto");
	});

	it("should return null if the collection is empty", function() {
		var element = [].first();

		expect(element).toEqual(null);
	});

	it("should return null if there are no matching elements", function() {
		var element = people.first(function(x) { return x.age == 18; });

		expect(element).toEqual(null);
	});
});

describe("Last", function() {
	it("should return the very last element in the array if no spec is provided", 
		function() {
		var name = children.last().name;

		expect(name).toEqual("martin");
	});

	it("should return the last element that matches the spec when provided", 
		function() {
		var name = children.last(function(x) { return x.sex == 'f'; }).name;

		expect(name).toEqual("auro");
	});

	it("should return null if the collection is empty", function() {
		var element = [].last();

		expect(element).toEqual(null);
	});

	it("should return null if there are no matching elements", function() {
		var element = people.last(function(x) { return x.age == 18; });

		expect(element).toEqual(null);
	});
});

describe("Count", function() {
	it("should return the length of the array if no spec is provided", function() {
		var count = children.count();

		expect(count).toEqual(9);
	});

	it("should return the number of elements that satisfies the spec", function() {
		var count = children.count(function(x){ return x.sex == 'f';});

		expect(count).toEqual(5);
	});
});

describe("Index", function() {
	it("should return the zero based position of the element that " +
	   "satisfies a function spec", function() {
		var ix = children.index(function(x) { return x.name == 'bany'; });

		expect(ix).toEqual(5);
	});

	it("should return the zero based position of the element that " +
	   "satisfies an object-type spec", function() {
		var ix = [1, 3, 5, 7, 9, 11].index(7);

		expect(ix).toEqual(3);
	});

	it("should return -1 if no element match the specification", function() {
		var ix = children.index(function(x) { return x.name == 'mark'; });

		expect(ix).toEqual(-1);
	});
});

describe("Pluck", function() {
	it("should retrieve the given property's value if the property exists", function() {
		var names = children.pluck('name');

		// expect(names).toEqual([
		// 	"ana", "fosto", "jane", "yadi", "lili", "bany", "rod", "auro", "martin"
		// ]);

		expect(names.length).toEqual(9);
	});
});

describe("Sum", function() {
	it("should retrieve the summatory of the result of executing the" +
	   "spec on each array's item", function() {
		var result = [1, 3, 5, 7, 9, 11].sum(function(x) { return x * 2; });

		expect(result).toEqual(72);
	});

	it("should retrieve the summatory of every array's element when no" +
	   "spec is provided", function() {
		var result = [1, 3, 5, 7, 9, 11].sum();
		
		expect(result).toEqual(36);
	});
});

describe("Max", function() {
	it("should retrieve the maximum number in the array when there is " +
	   "no comparer", function() {
		var n = [1, 3, 5, 7, 9, 11, 2, 4, 6].max();

		expect(n).toEqual(11);
	});

	it("should retrieve the larger name in the collection based on a " +
	   "comparer function", function() {
		var name = children.max(function(a, b) { 
			return a.name.length - b.name.length; 
		}).name;

		expect(name).toEqual("martin");
	});

	it("should retrieve the name of the older person in the collection " +
	   "based on a comparer function", function() {
		var name = people.max(function(a, b) { 
			return a.age - b.age; 
		}).name;

		expect(name).toEqual("pedro");
	});
});

describe("Min", function() {
	it("should retrieve the minimum number in the array when there is " +
	   "no comparer", function() {
		var n = [1, 3, 5, 7, 9, 11, 2, 4, 6].min();

		expect(n).toEqual(1);
	});

	it("should retrieve the shorter name in the collection based on a " +
	   "comparer function", function() {
		var name = children.min(function(a, b) { 
			return a.name.length - b.name.length; 
		}).name;

		expect(name).toEqual("ana");
	});

	it("should retrieve the name of the younger person in the collection " +
	   "based on a comparer function", function() {
		var name = people.min(function(a, b) { 
			return a.age - b.age; 
		}).name;

		expect(name).toEqual("juan");
	});
});

describe("Flatten", function() {
	it("should retrieve an array with 16 elements", function() {
		var a = [1,2,3,[4,5,[6, 7, 8], 9, 10, 11, 12, 13, 14], 15, 16].flatten();

		expect(a.length).toEqual(16);
	});
});