/*************************
 * Variable
 */

var massMark = 78; //kg
var heightMark = 1.69; //meters

var massJohn = 92; //kg
var heightJohn = 1.95; //meters

markBMI = massMark / (heightMark * heightMark);
johnBMI = massJohn / (heightJohn * heightJohn);

console.log(markBMI, johnBMI);

var markHeighrBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's? " + markHeighrBMI);

/*************************
 * if/else
 */

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John's wins " + scoreJohn + " points");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("John's wins " + scoreMike + " points");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log("Mary's wins " + scoreMary + " points");
} else {
  console.log("Score is Draw ");
}

/*************************
 * functions
 */

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageMary = calculateAge(1969);

console.log(ageJohn, ageMike, ageMary);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years. ");
  } else {
    console.log(firstName + " is already retirement ");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Mary");

/*************************
 * Array
 */

var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

var john = ["John", "Smith", 1990, "designer", false];
john.push("blue");
john.unshift("Mr.");
console.log(john);

var isDesigner =
  john.indexOf("designer") === -1
    ? "john is NOT a designer"
    : "John is a designer";

console.log(isDesigner);

/*************************
 * Array && Function Code
 */

function tipCalculator(bill) {
  var percentage;

  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(finalValues);

/*************************
 * Objects && Properties && Methods
 */

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function(birthYear) {
    return 2018 - this.birthYear;
  }
};
console.log(john.calcAge());
console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
//john.isMarried = true;
john["isMarried"] = true;
console.log(john);

var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
console.log(jane);

var john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
  console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + " has a higher BMI of " + mark.BMI);
} else {
  console.loh("They have same BMI");
}

/*************************
 * For loops
 */

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};
var mark = {
  fullName: "Mark Miller ",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pay heigher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pay heigher tips, with an average of $" +
      mark.average
  );
}
