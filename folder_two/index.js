// Implicit Types - TypeScript will infer the type of the variable
var helloWorld = 'Hello World'; // string
var helloWorld2 = 123; // number
var helloWorld3 = true; // boolean
var helloWorld4 = { name: 'John Doe' }; // object
var helloWorld5 = ['John Doe', 'Jane Doe']; // array
var helloWorld6 = null; // null
var helloWorld7 = undefined; // undefined
var helloWorld8 = Symbol('foo'); // symbol
var helloWorld9 = function () { return 'Hello World'; }; // function
var helloWorld10 = new Date(); // Date
var helloWorld11 = /foo/; // RegExp
var helloWorld12 = new Error(); // Error
var helloWorld13 = [1, 'foo']; // (number | string)[]
var helloWorld14 = [1, 'foo', true]; // (number | string | boolean)[]
var helloWorld15 = [1, 'foo', true, { name: 'John Doe' }]; // (number | string | boolean | object)[]
var helloWorld16 = [
    1,
    'foo',
    true,
    { name: 'John Doe' },
    ['John Doe', 'Jane Doe'],
]; // (number | string | boolean | object | string[])[]
var helloWorld17 = [
    1,
    'foo',
    true,
    { name: 'John Doe' },
    ['John Doe', 'Jane Doe'],
    null,
]; // (number | string | boolean | object | string[] | null)[]
var helloWorld18 = [
    1,
    'foo',
    true,
    { name: 'John Doe' },
    ['John Doe', 'Jane Doe'],
    null,
    undefined,
]; // (number | string | boolean | object | string[] | null | undefined)[]
var helloWorld19 = [
    1,
    'foo',
    true,
    { name: 'John Doe' },
    ['John Doe', 'Jane Doe'],
    null,
    undefined,
    Symbol('foo'),
]; // (number | string | boolean | object | string[] | null | undefined | symbol)[]
// Explicit Types - TypeScript will not infer the type of the variable
// Built-in Types
// Boolean
var isCool = true;
// Number
var age = 56;
// String
var firstName = 'Justin';
var eyeColor = 'brown';
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
var x = ['hello', 10];
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Europe"] = 2] = "Europe";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Africa"] = 4] = "Africa";
    Continents[Continents["Australia"] = 5] = "Australia";
    Continents[Continents["Antarctica"] = 6] = "Antarctica";
})(Continents || (Continents = {}));
var region = Continents.Antarctica;
// enum Continents {
//   NorthAmerica = 'North America',
//   SouthAmerica = 'South America',
//   Europe = 'Europe',
//   Asia = 'Asia',
//   Africa = 'Africa',
//   Australia = 'Australia',
//   Antarctica = 'Antarctica',
// }
// usage
var continent = Continents.Antarctica;
// Any - !!!!!!!!!! Be careful with any !!!!!!!!!!
var whatever = 'aghhhhhh noooooo!';
whatever = 5;
whatever = true;
whatever = {};
whatever = [];
whatever = null;
whatever = undefined;
whatever = Symbol('foo');
whatever = function () { return 'Hello World'; };
whatever = new Date();
whatever = /foo/;
whatever = new Error();
whatever = [1, 'foo'];
whatever = [1, 'foo', true];
whatever = [1, 'foo', true, { name: 'John Doe' }];
whatever = [1, 'foo', true, { name: 'John Doe' }, ['John Doe', 'Jane Doe']];
whatever = [
    1,
    'foo',
    true,
    { name: 'John Doe' },
    ['John Doe', 'Jane Doe'],
    null,
];
whatever = [
    1,
    'foo',
    true,
    { name: 'John Doe' },
    ['John Doe', 'Jane Doe'],
    null,
    undefined,
];
whatever = [
    1,
    'foo',
    true,
    { name: 'John Doe' },
    ['John Doe', 'Jane Doe'],
    null,
    undefined,
    Symbol('foo'),
];
// Void
var sing = function () {
    console.log('lalalala');
};
// Null and Undefined
var meh = undefined;
var noo = null;
// Never
var error = function () {
    throw Error('oops');
};
// Type Assertions
var ohhithere = 'OH HI THERE';
var strLength = ohhithere.length;
var strLength2 = ohhithere.length;
var user = {
    name: 'Justin',
    id: 0
};
// const windowState: WindowStates = 'I dont know that this is not a window' // Error
// const odd: OddNumberUnderTen = 11 // Error
var odd = 1; // OK
// Composing types -> Intersection Types
var getLength = function (param) {
    // return param.length // Error
};
console.log(getLength('test')); // 4
console.log(getLength(['test', 'test2'])); // 2
