// Basic Types
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
// number
var id = 5;
// string
var company = 'Dodgers Rule!';
// boolean
var isPublished = true;
// can be anything
var x = 'Hello';
// number
var age;
age = 5;
// Arrays - this is an array of numbers
var ids = [1, 2, 3, 4, 5];
// Tuple - this is an array of mixed types. the types have to be in the order specified
var person = [1, 'Justin', true];
// Tuple Array - this is an array of tuples
var employee;
employee = [
    [1, 'Justin'],
    [2, 'John'],
    [3, 'Jupiter'],
];
// Union - this is a variable that can be multiple types but you can only assign one type
var pid = 22;
// Enum - this is a variable that can be multiple types but you can assign names to the types
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Down)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var user = {
    id: 1,
    name: 'Justin'
};
// Type Assertion - this is a way to tell the compiler that you know better than it does what the type of a variable is
var cid = 1;
// let customerId = <number>cid // this is the old way
var customerId = cid; // this is the new way
customerId = 5; // this will work because we told the compiler that cid is a number
// Functions - this is a function that takes a string and returns a string (the return type is inferred) and the parameter is optional
// function addNum(x, y) {
//   return x + y
// }
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2))
// Void - this is a function that doesn't return anything (the return type is inferred)
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'Justin'
};
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
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
console.log(employee);
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
