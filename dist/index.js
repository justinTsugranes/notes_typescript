var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var isPublished = true;
// Number
var age = 56;
var id = 5;
var num;
num = 5;
// String
var firstName = 'Justin';
var eyeColor = 'brown';
var quote = 'Dodgers Rule!';
// Array
var ids = [1, 2, 3, 4, 5];
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
var x = ['hello', 10];
var person = [1, 'Justin', true];
var basket;
basket = ['basketball', 5];
// Tuple Array - this is an array of tuples
var employee;
employee = [
    [1, 'Justin'],
    [2, 'John'],
    [3, 'Jupiter'],
];
// Enum - this is a variable that can be multiple types but you can assign names to the types
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
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
// Any - !!!!!!!!!! Be careful with any !!!!!!!!!!
var y = 'Hello';
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
// Void - this is a function that doesn't return anything (the return type is inferred)
function log(message) {
    console.log(message);
}
log('Hello World');
log(5);
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
var username = {
    id: 1,
    name: 'Justin'
};
// Type Assertion - this is a way to tell the compiler that you know better than it does what the type of a variable is
var cid = 1;
// let customerId = <number>cid // this is the old way
var customerId = cid; // this is the new way
customerId = 5; // this will work because we told the compiler that cid is a number
var ohhithere = 'OH HI THERE';
var strLength = ohhithere.length;
var strLength2 = ohhithere.length;
// Functions - this is a function that takes a string and returns a string (the return type is inferred) and the parameter is optional
// function addNum(x, y) {
//   return x + y
// }
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
var user = {
    name: 'Justin',
    id: 0
};
var user1 = {
    id: 1,
    name: 'Justin'
};
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
// Union - this is a variable that can be multiple types but you can only assign one type
var pid = 2;
// const windowState: WindowStates = 'I dont know that this is not a window' // Error
// const odd: OddNumberUnderTen = 11 // Error
var odd = 1; // OK
// Composing types -> Intersection Types
var getLength = function (param) {
    // return param.length // Error
};
console.log(getLength('test')); // 4
console.log(getLength(['test', 'test2'])); // 2
var Person = /** @class */ (function () {
    // protected protectedAge: string // this is a way to make a property only accessible to the class and any classes that extend it
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var justin = new Person(1, 'Justin', 35);
var john = new Person(2, 'John', 65);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, age, position) {
        var _this = _super.call(this, id, name, age) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Jupiter', 25, 'CEO');
// console.log(justin) // this will work because id and name are public
// console.log(john) // this will work because id and name are public
// console.log(justin.id) // this will work because id is public
// console.log(justin.name) // this will work because name is public
// console.log(justin.age) // this will not work because age is private
console.log(justin.register()); // this will work because register is public
// console.log(employee)
console.log(emp.name);
// Generics - this is a way to make a function reusable for multiple types of data (this is a function that takes a string and returns a string)
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['justin', 'john', 'jupiter']);
numArray.push(5);
// numArray.push('hello') // this will not work because we told the compiler that the array is a number array
console.log(numArray);
strArray.push('hello');
console.log(strArray);
