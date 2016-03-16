function exercise1(numArray) {
	var total = 0,
		average,
		i;

	for (i = 0; i < numArray.length; i++) {
		total = total + numArray[i];
	}
	average = total/numArray.length;
	return average;
}

function exercise2(numArray) {
	var largest = numArray[0],
		i;
	if (numArray.length > 1){
		for (i = 1; i < numArray.length; i++) {
			if (numArray[i] > largest) {
				largest = numArray[i];
			}
		}
	}
	return largest;
}

function exercise3(numArray) {
	var hasEven = false,
		i;

	for (i = 0; i < numArray.length; i++) {
		if (numArray[i] % 2 === 0) {
			hasEven = true;
		}
	}
	return hasEven;
}

function exercise4(numArray) {
	var allEven = true,
		i;

	for (i = 0; i < numArray.length; i++) {
		if (numArray[i] % 2 === 1) {
			allEven = false;
		}
	}
	return allEven;
}

function arrayContains(stringArray, searchString) {
	var hasString = false,
		i;
	for (i = 0; i < stringArray.length; i++) {
		if (stringArray[i] === searchString) {
			hasString = true;
		}
	}
	return hasString;
}

function arrayContainsTwo(stringArray, searchString) {
	var hasTwoString = false,
		seachStringCount = 0,
		i;
	for (i = 0; i < stringArray.length; i++) {
		if (stringArray[i] === searchString) {
			seachStringCount++;
		}
	}

	if (hasTwoString >= 2) {
		hasTwoString = true;
	}

	return hasTwoString;
}

function underscoreexercise2(numArray) {
	return _.reduce(numArray, function(memo, num){if (num > memo) {return num;} else {return memo;}}, numArray[0]);
}

function underscoreexercise3(numArray) {
	return _.reduce(numArray, function(memo, num){if (num % 2 === 0) {return true;} else {return memo;}}, false);
}

function underscoreexercise4(numArray) {
	return _.reduce(numArray, function(memo, num){if (num % 2 === 1) {return false;} else {return memo;}}, true);
}
