
function log(smth) {
    console.log(smth)//inlocuieste la final 
};
/* Datatypes
  - undefined, null, boolean, string, symbol, number and object
*/

var myName = "Petru"

myName = 8;

let ourName = "freeCodeCamp"

const pi = 3.14 //can never change

/* 
Storing Values with  Assignment Operator 
*/
var a; // declare a variable
var b = 2; //declare and assign a variable
log(a)
a = 7;
b = a;
log(a);


//Unnitialized variable
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
log(c);


//Case Sensitivity in Variables
var StUdLyCapVar;

var properCamelCase;
var titleCaseOver;

strudleCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Adding numbers
var sum = 10 + 10;
log(sum);

//Subtraction
var difference = 45 - 33;

//Multiplycation
var product = 8 * 10;

//Dividing numbers
var quotient = 66 / 33;


//Increment numbers
var myVar = 87;

myVar = myVar + 1;
myVar++;


//Decrement numbers
var myVar = 11;

myVar = myVar - 1;
myVar--;


//Decimal numbers
var ourDecimal = 5.7;
var myDecimal = 0.009;

//Multiply Decimal
var product = 2.0 * 2.5;
log(product);

//Divide Decimals;
var quotient = 4.4 / 2.0;
log(quotient);

//Finding a Remainder
var remainder;
remainder = 11 % 3;
log(remainder);


//Compound Assignment with Augumented Addition
var a = 3;
var b = 17;
var c = 12;

a = a + 12;
b += 9;
c += 7;


//Compound Assignment with Augumented Subtraction
var a = 11;
var b = 9;
var c = 3;

a = a - 6;
b -= 15;
c -= 1;


//Compound Assignment with Augumented Multiplication
var a = 5;
var b = 12;
var c = 4.6;

a = a * 5;
b *= 3;
c *= 10;
log(c);


//Compound Assignment with Augumented Division
var a = 48;
var b = 108;
var c = 33;

a = a / 12;
b /= 4;
c /= 11;


//Declare String Variables
var firstName = "Alana";
var lastName = "Turing";

var myFirstName = "Petru";
var myLastName = "Lucan";


//Escaping Literal Quotes in Strings
/*
var myStr = "I am a "double quoted" string inside "double quotes" ";
*/
var myStr = "I am a \"double quoted\" string inside \"double quotes\" ";
log(myStr);


//Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>' //single quotes
var myStr = `'<a href="http://www.example.com" target="_blank">Link</a>'` //backticks
log(myStr)

//Escape Sequences in Strings
/*
\'single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
log(myStr);


//Concatenating Strings with Plus/Plus-Equals Operator;
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start. "
myStr += "This is the end.";
log(myStr)


//Constructing Strings with Variables
var ourName2 = "freeCodeCamp";
ourStr = "Hello, our name is " + ourName2 + ", how are you?";

var myName = "Petru"
var myStr = "My name is " + myName + " and I am well!";
log(myStr);


//Appending Variables to Strings;
var anAdjective = "awesome";
var outStr = "freeCodeCamp";
ourStr += anAdjective;

var someAdjective = "worthwhile!"
var myStr = "Learning to code is ";
myStr += someAdjective;
log(myStr);


//Find Length of String
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "LoveLace";

lastNameLength = lastName.length;
log(lastNameLength);


//Bracket Notation to find First Character in String;
var firstLetterOfFirstName = 0;
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = 0;
var lastName = "LoveLace";

firstLetterOfLastName = lastName[0];
log(firstLetterOfLastName);


//String Immutability
var myStr = "Jello World"

myStr[0] = "H"// fix me
myStr = "Hello World";


//Bracket Notation to find Nth Character in String;
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2];
//Bracket Notation to find Last Character in String;
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1];


//Bracket Notation to find Nth to Last Character in String;
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName[lastName.length - 2];


//Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " from the store " + myAdverb + ".";

    return result;
}
log(wordBlanks("dog", "big", "ran", "quickly"));
log(wordBlanks("bike", "slow", "got stolen", "fast"));


//Store Multiple Vallues with Arrays
var ourArray = ["John", 23];

var myArray = ["Quincy", 1];


//Nested Arrays
var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["bulls", 23], ["white Sox", 134]];


//Acces Data with indexes
var ourArray = [50, 60, 70];
var ourData = ourArray[0];

var myArray = [50, 60, 70];
var myData = myArray[0];
log(myData);


//Modify Array Data With Indexes
var ourArray = [18, 64, 99];
ourArray[1] = 45;

var myArray = [18, 64, 99];
myArray[0] = 45;
log(myArray);


//Access Multi-Dimensional Arrays With Indexes;
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]
var myData = myArray[2][1];
log(myData);


//Manipulate Arrays With push();
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);

var myArray = [["john", 23], ["cat", 2]];
myArray.push(["dog", 32]);


//Manipulate Arrays with pop()
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

var myArray = [["john", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
log(myArray)
log(removedFromMyArray)
//Manipulate Arrays with shift()
var ourArray = ["Stimpson", "J", "cat"];
var removedFromOurArray = ourArray.shift();
//removedFromOurArray now equals "Stimpson" and OurArray now equals ["J", ["cat"]];

var myArray = [["john", 23], ["cat", 2]];
var removedFromMyArray = myArray.shift();
log(myArray);
log(removedFromMyArray);


//Manipulate Arrays with unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); //ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); //ourArray now equals ["Happy", "J", "cat"]

var myArray = [["john", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//Shopping List
var myList = [["cereal", 3], ["milk", 2], ["bananas", 4], ["juice", 3], ["eggs", 10]];


//Write Reusable Code with Functions
function ourReusableFunction() {
    log("Heya, World");
}
ourReusableFunction();

function reusableFunction() {
    log("Hi world");
}
reusableFunction();


//Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) {
    log(a - b);
}
ourFunctionWithArgs(10, 5)  // Outputs 5

function functionWithArgs(a, b) {
    log(a + b)
}
functionWithArgs(5, 55);


//Global Scope and functions
var myGlobal = 10;

function fun1() {
    //Assign 5 to oopsglobal Here
    var oopsGlobal = 5;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    log(output)
}
fun1();
fun2();


//Local Scope And Function
function myLocalScope() {
    var myVar2 = 5;
    log(myVar2);
}
myLocalScope();


//Global Scope vs Local Scope in Functions
var outerWear = "T-Shirt";
function myOutfit() {

    var outerWear = "Sweater"
    return outerWear;

}
log(myOutfit());
log(outerWear);


//Return a Value from a Function with Return
function minusSeven(num) {
    return num - 7;
}
log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
log(timesFive(5));


//Understanding Undefined Value Returned from a Function
var sum = 0;
function addThree() {
    sum += 3;//it'll be undefined unless we make the function to return the value
    return sum;
}
log(addThree());


//Assignment with a Returned Value
var changed = 0;
function change(num) {
    return (num + 5) / 3
}
changed = change(10);

var processed = 0;
function processedArg(num) {
    return (num + 4) / 5;
}
processed = processedArg(6);


//Stand in Line
function nextInLine(arr, item) {
    arr.push(item); //add item to the end of the array
    return arr.shift(); //remove and return  first item from the array
}

var testArr = [1, 2, 3, 4, 5];

log("Before: " + JSON.stringify(testArr));
log(nextInLine(testArr, 6));
log("After: " + JSON.stringify(testArr));

//Boolean Values
function welcomeToBooleans() {
    return true;
    // return false;
}


//Use Conditional Logic with If Statements
function trueOrFalse(itIsTrue) {
    if (itIsTrue) {
        return "Yes, is it True"
    }
    return "No, it is False"
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was True"
    }
    return "No, that was false"
}
log(trueOrFalse(true));


//Comparison with Equals Operator
function testEqual(val) {
    if (val == 10) {
        return "It is Equal"
    }
    return "It is not Equal"
}
log(testEqual(12));


// Comparison with the Strict Equality Operator
function testEqual(val) {
    if (val === 3) {
        return "It is Equal"
    }
    return "It is not Equal"
}
log(testEqual(3));
/*
3 === 3  true
3 === '3' false - because the === does not make the conversion of types(i.e number and string)
3 == '3' true - bcs the == does make the conversion
*/
function compareEquality1(a, b) {
    if (a == b) {
        return "Equal"
    }
    return "Not Equal"
}
log(compareEquality1(10, '10'))

function compareEquality2(a, b) {
    if (a === b) {
        return "Equal"
    }
    return "Not Equal"
}
log(compareEquality2(10, '10'));


// Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal"
    }
    return "Equal"
}
log(testNotEqual(10));


//Comparison with the Strict inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal"
    }
    return "Equal"
}
log(testStrictNotEqual('17'));


// Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "over 100"
    }

    if (val > 9) {
        return "over 10"
    }

    return "10 or under"
}
log(testGreaterThan(10));


//Comparison with Greater Than or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over"
    }
    if (val >= 10) {
        return "10 or over"
    }
    return "Less than 10"
}
log(testGreaterOrEqual(9));


//Comparison with the Logical And Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 50) {
        return "Yes"
    }
    return "No"
}
log(testLogicalAnd(50));


//Comparison with the Logical Or Operator
function testLogicalOr(val) {
    if (val < 20 || val > 20) {
        return "outside"
    }
    return "inside"
}
log(testLogicalOr(15));


//Else Statements
function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
log(testElse(4));


// Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10"
    } else if (val < 5) {
        return "Smaller than 5"
    } else {
        return "Between 5 and 10"
    }
}
log(testElseIf(2));


//Logical Order in Else If Statements
function orderMyLogic1(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10"
    }
}
log(orderMyLogic1(3))//Wrong ^^^^^^^

function orderMyLogic2(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10"
    }
}
log(orderMyLogic2(3))//Corect ^^^^^^


// Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "huge"
    }
}
log(testSize(19));


//Golf
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
}
log(golfScore(5, 2));


//Switch Statements
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1: answer = "alpha";
            break;
        case 2: answer = "beta";
            break;
        case 3: answer = "gamma";
            break;
        case 4: answer = "delta";
            break;
    }
    return answer;
}
log(caseInSwitch(1))


//Default Option is Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a": answer = "apple";
            break;
        case "b": answer = "bird";
            break;
        case "c": answer = "cat";
            break;
        case "d": answer = "delta";
            break;
        default: answer = "stuff";
            break;

    }
    return answer;
}
log(switchOfStuff("d"));


//Multiple identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
    }
    return answer;
}
log(sequentialSizes(6));


// Replacing if Else Chains with Switch
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "there is no #1";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;

    // if (val === "bob") {
    //     answer = "marley";
    // } else if (val === 42) {
    //     answer = "The Answer";
    // } else if (val === 1) {
    //     answer = "there is no #1";
    // } else if (val === 99) {
    //     answer = "Missed by this much!";
    // } else if (val === 7) {
    //     answer = "Ate Nine";
    // }
    // return answer;
}
log(chainToSwitch(7));


// Returning Boolean Values with Functions
function returnBoolean(a, b) {
    return a < b;

    // if (a <b){
    //     return true;
    // } else {
    //     return false;
    // }
}
log(returnBoolean(10, 15));//it will compare the paramaters and return the boolean value


//Returning Early Patter from Functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }


    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
log(abTest(-2, 2));


//Counting Cards
var count = 0;
function cc(card) {
    switch (card) {
        case 2:
            answer = ""
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}
cc(2); cc('K'); cc(7); cc('J'); cc('Q');

log(cc(3));


//Build JS Objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tail": 1,
    "friends": ["everything"]
};

myDog = {
    "name": "Rex",
    "legs": 4,
    "tail": 2,
    "friends": ["plenty"]
};


// Accessing Object Properties with Dot Notation
var testObj0 = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
}

var hatValue = testObj0.hat;
var shirtValue = testObj0.shirt;


// Accessing Object Properties with Bracket Notation
var testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
};

var entreeValue = testObj1["an entree"];
var drinkValue = testObj1['the drink']


// Accessing Object Properties with Variables
var testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};

var playerNumber = 16;
var player = testObj2[playerNumber];


//Updating Object Properties
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tail": 1,
    "friends": ["everything"]
};
ourDog.name = "Happy Camper"

var myDog = {
    "name": "Rex",
    "legs": 4,
    "tail": 2,
    "friends": ["plenty"]
};
myDog.friends = "everyone"


//Add New Properties to an Object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tail": 1,
    "friends": ["everything"]
};
ourDog.bark = "baw-waw"        // dot notation   

var myDog = {
    "name": "Rex",
    "legs": 4,
    "tail": 2,
    "friends": ["plenty"]
};
myDog['bark'] = "woof"        //bracket notation


// Delete Properties From an object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tail": 1,
    "friends": ["everything"],
    "bark": "baw-waw"
};
delete ourDog.bark;

var myDog = {
    "name": "Rex",
    "legs": 4,
    "tail": 2,
    "friends": ["plenty"],
    "bark": "woof"
};
delete myDog['bark'];


// Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val]

    return result;
};
log(phoneticLookup("delta"));


// Testing objects for Properties
var myObj3 = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    if (myObj3.hasOwnProperty(checkProp)) {
        return myObj3[checkProp]
    } else {
        return "Not Found"
    }
}
log(checkObj("bed"));


// Manipulatin Complex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": "1973",
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist": "Petru Lucan",
        "title": "Cereal killer",
        "release_year": "2000",
        "formats": [
            "pelicula"
        ]
    }
]


//Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1]
log(secondTree);


//Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give love A Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }

};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value;
    }
    return collection;
};
updateRecords(2468, "tracks", "test")
console.log(updateRecords(5439, "artist", "ABBA"));


//Itterate with While loops
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++
};
log(myArray);


//Iterate with For Loops
var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
};

var myArray = [];
for (var i = 1; i < 6; i++) {
    myArray.push(i)
};
log(myArray);


//Iterate Odd Numbers with a For Loop
var ourArr = []
for (var i = 0; i < 10; i += 2) {
    ourArr.push(i);
}
log(ourArr);

var myArr = [];
for (var i = 1; i < 10; i += 2) {
    myArr.push(i);
}
log(myArr)


//Count Backwards with a For Loop
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i)
}

var myArr = [];
for (var i = 9; i > 0; i -= 2) {
    myArr.push(i);
}
log(myArr)


//Iterate Through an Array with a For Loop
var ourArr = [9, 10, 11, 12]
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
log(ourTotal);

var myArr = [2, 3, 4, 5, 6]
var myTotal = 0;
for (var i = 0; i < myArr.length; i++) {
    myTotal += myArr[i]
}
log(myTotal);


//Nesting For Loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
log(product)


//Iterate with Do.. While Loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5);

log(i, myArray)


//Profile Lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "69539268",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "952612548",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Shelock",
        "lastName": "Holmes",
        "number": "54541648321",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Cristian",
        "lastName": "Vas",
        "number": "unkown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such Property"
        }
    }
    return "No such contact"
};
var data = lookUpProfile("Akira", "likes");
log(data);


// Generate Randon Fractions
function randonFraction() {

    return Math.random();
}
log(randonFraction());

//Generate Random Whole Numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
log(randomWholeNum())


//Generate Random Whole Numbers within a Range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);

// Use the Parse Int Function
function convertToInteger(str) {
    return parseInt(str);
}
log(convertToInteger("56"));


//Use the parseInt Function with a Radix
function convertTInteger(str) {
    return parseInt(str, 2);
}
log(convertTInteger("100011"));


//Use the Conditional (Ternary) Operator
//condition ? statement-if-true : statement-if-false;
function checkEqual(a, b) {
    return a === b ? true : false;

    return a === b //<--- same thing as on the upper line;
}


//Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
log(checkSign(0));


//Difference between var and let Keywords
let catName = "Quincy"; //declare and assign
let quote;

catName = "beau"        //reassign value

function catTalk() {
    "use strict";

    catName = "Oliver"
    quote = catName + " says Meow!";
};


//Compare Scopes of the var ad let Keywords
function checkScopeVar() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        log("Block scope i is: ", i);
    };
    log("Function Scope i is: ", i)
    return i;
};
log(checkScopeVar());

function checkScopeLet() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        log("Block scope i is: ", i);
    };
    log("Function Scope i is: ", i)
    return i;
};
log(checkScopeLet());


//Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";

    for (let i = 0; i < str.length; i += 2) {
        log(SENTENCE);
    }
};
printManyTimes("freeCodeCamp")


//Mutate an Array Declared with const;
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    // s = [2, 5, 7];   not possible this way
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
log(s);


//Prevent Object Mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
log(PI);


//Use Arrow functions to Write Concise Anonymous Functions
// var magic = function () {
//     return new Date();
// }
const magic = () => new Date();


//Write arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

log(myConcat([1, 2], [3, 4, 5]));


//Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8, .34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray);
log(squaredIntegers);


//Default Parameters
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
log(increment(5, 2));
log(increment(5));


//Use the Rest Operator with Function Parameters
var sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0)
    }
})();
log(sum(1, 2, 3, 4, 5));


//Use the Spread Operator to Evaluate Arraus In-Place
const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let arr2;
(function () {
    arr2 = [...arr1];
    // arr1[0] = 'potato'
})();
log(arr2);


//Use Destructuring Assignment to Assign Variable from Objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; //x=3.6
var y = voxel.y; //y=7.4
var z = voxel.z; //z=6.54

const { x: d, y: e, z: f } = voxel; //a=3.6, b=7.4, c=6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
log(getTempOfTmrw(AVG_TEMPERATURES));


//Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
    today: { ming: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
}
function getMaxOfTmrw(forecast) {
    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    return maxOfTomorrow;
}
log(getMaxOfTmrw(LOCAL_FORECAST));


// Use Destructuring Assignment to Assign Variables from Arrays
const [m, n, , o] = [1, 2, 3, 4, 5, 6];
log(m, n, o);

let p = 8, q = 6;
(() => {
    "use strict";
    [p, q] = [q, p]
})();
log(p);
log(q);


//Use Destructuring Assignment with the Rest Operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [, , ...arr] = list;    //do nothing for the first two & put the rest in -arr-
    return arr;
}
const arr = removeFirstTwo(source);
log(arr);
log(source);


//Use Destructuring Assignment to Pass an Object as a Function's Parameter
const stats = {
    max: 56.78,
    standard_deviatin: 4.34,
    median: 34.43,
    node: 23.43,
    min: 6.45,
    average: 34.23
}
const half = (function () {

    return function half({ max, min }) {
        return (max + min) / 2;
    };

})();
log(stats);
log(half(stats));


//Create Strings using Template Literals
const person = {
    name: "Zodiac Hesbro",
    age: "56"
}
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;
log(greeting);

const result = {
    succes: ["max-length", "no=amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
        return resultDisplayArray;
    }
}
const resultDisplayArray = makeList(result.failure)
log(resultDisplayArray)


//Write Concise Declarativce Functions
const bicycle1 = {
    gear: 2,
    setGear: function (newGear) {
        "use strict";
        this.gear = newGear;
    }
}; //^^^^ - long way

const bicycle2 = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
}; //^^^^ -short way

//Use class Syntax to Define a Constructor Function
var SpaceShuttle1 = function (targetPlanet) {
    this.SpaceShuttle = targetPlanet;
}
var zeus = new SpaceShuttle1('Jupiter')  //^^^ - old way

class SpaceShuttle2 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle2('Jupiter')  //^^^ - new way
log(zeus.targetPlanet)


function makeClass() {
    class VEGETABLE {
        constructor(name) {
            this.name = name
        }
    }

    return VEGETABLE;
}
const VEGETABLE = makeClass();
const carrot = new VEGETABLE('carrot');
log(carrot.name);


//use getters and setters to Control Access to an Object
function makeClass1() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5 / 9 * (temp - 32);
        }
        get termperature() {
            return this._temp;
        }
        set termperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
};
const Thermostat = makeClass1();
const thermos = new Thermostat;
let temp = thermos.termperature;
thermos.termperature = 26;
temp = thermos.termperature;
log(temp);


// //Understand the Difference Between import and require
//  import { capitalizeString } from "./string_function"

// const cap = capitalizeString("hello");
// log(cap);


// //Use export to reuse a Code Block
// const capitalizeString = (string) => {
//     return string.charAt(0).toUpperCase + string.slice(1);
// };
// export { capitalizeString };
// export const foo = "bar";
// export const bar = "foo";

// //Use * to Import Everything from a File
// import * as capitalizeStrings from "string_function";

// // Create an Export Fallback with export default
// export default function subtract (x,y){
//     return x-y;
// };

// //Import a Deafault Export
// import subtract from "math_functions";
// subtract(7,4);
