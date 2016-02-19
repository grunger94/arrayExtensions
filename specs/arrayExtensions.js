

// describe("Each", function() {
//     it("should receive a valid callback function", function() {
//     	people.each(logPerson);

//     	expect(logPerson).toBeDefined();
//     	expect(typeof logPerson).toBe('function');
//     });

//     it("should return context", function() {
//     	var b = people.each(logPerson);

//     	expect(b).toEqual(people);
//     });
// });
//

// describe("Where", function() {
//     it("should create a new array with the set of matching elements", function() {
// 		var p = people.where(function(person) {
			
// 			var skills = person.skills.where(function(skill) { 
// 				return skill == 'PHP'; 
// 			});

// 			return skills.length == 0; 
// 		})
// 		.each(logPerson);

// 		expect(p instanceof Array).toBeTruthy();
// 		expect(p.length).toEqual(2);
// 	});
// });

/*
describe("Any", function() {
	
	// var p = people.where(function(dev) {
	// 	return !dev.skills.any(function(skill) { 
	// 		return skill == 'PHP' 
	// 	});
	// }) 
	// .each(logPerson)

	// expect(p instanceof Array).toBeTruthy();
	// expect(p.length).toEqual(2);
	

	it("should return a boolean value", function() {
		var dev = people[0];
		
		var found = dev.skills.any(function(skill) { 
			return skill == 'PHP' 
		});

		expect(typeof found).toBe('boolean');
	});

    it("should return true since the spec is found within the array", function() {
		var dev = people[1];
		
		var found = dev.skills.any(function(skill) { 
			return skill == 'PHP' 
		});

		expect(found).toBeTruthy();
	});

	it("should return false since the spec is not found within the array", function() {
		var dev = people[2];
		
		var found = dev.skills.any(function(skill) { 
			return skill == 'PHP' 
		});

		expect(found).toBeFalsy();
	});
});

describe("Select", function() {
	it("should return an array with the name of the developers who have PHP skills", function() {
		var p = people.where(function(dev) {
			return !dev.skills.any('PHP'); 
		})
		.select(function(dev) {
			return dev.name; 
		})
		.each(function(x) {
			console.log(x); 
		});

		expect(p).toEqual(["pedro", "pablo"]);
	});
});

describe("Select", function() {
	it("should return an array with the name of the developers who have PHP skills", function() {
		var p = people.where(function(dev) {
			return !dev.skills.any('PHP'); 
		})
		.select(function(dev) {
			return dev.name; 
		})
		.each(function(x) {
			console.log(x); 
		});

		expect(p).toEqual(["pedro", "pablo"]);
	});
});

describe("Take", function() {
	it("should return an array with the first howMany elements if spec is not present", function() {
		var ch = children.take(3, function(x){ return x.sex == 'f';})
		.select(function(dev) {
			return dev.name; 
		})
		.each(function(x) {
			console.log(x); 
		});

		expect(ch.length).toEqual(3);
	});
});
*/

// describe("Take", function() {
// 	it("should return an array with the first howMany elements if spec is not present", function() {
// 		var ch = children.take(3, function(x){ return x.sex == 'f';})
// 		.select(function(dev) {
// 			return dev.name; 
// 		})
// 		.each(function(x) {
// 			console.log(x); 
// 		});

// 		expect(ch.length).toEqual(3);
// 	});
// });

// describe("Skip", function() {
// 	it("should return an array containing all of its items but the first howMany", function() {
// 		var ch = children.skip(3)
// 		.select(function(p) {
//  			return p.name; 
//  		})
// 		.each(function(x) {
// 			console.log(x); 
// 		});

// 		expect(ch.length).toEqual(6);
// 	});
// });

// describe("First", function() {
// 	it("should return the first element in the array if no spec is provided", function() {
// 		var name = children.first().name;

// 		expect(name).toEqual("ana");
// 	});

// 	it("should return the first element that matches the spec when provided", function() {
// 		var name = children.first(function(x){ return x.sex == 'm';}).name;

// 		expect(name).toEqual("fosto");
// 	});
// });

// describe("Last", function() {
// 	it("should return the last element in the array if no spec is provided", function() {
// 		var name = children.last().name;

// 		expect(name).toEqual("martin");
// 	});

// 	it("should return the first element that matches the spec when provided", function() {
// 		var name = children.last(function(x){ return x.sex == 'f';}).name;

// 		expect(name).toEqual("auro");
// 	});
// });

// describe("Count", function() {
// 	it("should return the length of the array if no spec is provided", function() {
// 		var count = children.count();

// 		expect(count).toEqual(9);
// 	});

// 	it("should return the number of elements that satisfies the spec", function() {
// 		var count = children.count(function(x){ return x.sex == 'f';});

// 		expect(count).toEqual(5);
// 	});
// });

// describe("Index", function() {
// 	it("should return the zero based position of the element that satisfies an object value spec", function() {
// 		var index = children.index(function(x){ return x.name == 'bany';});

// 		expect(index).toEqual(5);
// 	});

// 	it("should return the zero based position of the element that satisfies a function spec", function() {
// 		var index = [1, 3, 5, 7, 9, 11].index(7);

// 		expect(index).toEqual(3);
// 	});

// 	it("should return -1 if no element match the specification", function() {
// 		var index = children.index(function(x){ return x.name == 'mark';});

// 		expect(index).toEqual(-1);
// 	});
// });

describe("Pluck", function() {
	it("should retrieve the given property's value if the property exists", function() {
		var names = children.pluck('name');
		
		expect(names).toEqual(["ana", "fosto", "jane", "yadi", "lili", "bany", "rod", "auro", "martin"]);
	});
});
