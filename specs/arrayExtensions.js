

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