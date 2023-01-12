// Basic Types

// number
let id: number = 5

// string
let company: string = 'Dodgers Rule!'

// boolean
let isPublished: boolean = true

// can be anything
let x: any = 'Hello'

// number
let age: number
age = 5
// Arrays - this is an array of numbers
let ids: number[] = [1, 2, 3, 4, 5]

// Tuple - this is an array of mixed types. the types have to be in the order specified
let person: [number, string, boolean] = [1, 'Justin', true]

// Tuple Array - this is an array of tuples
let employee: [number, string][]
employee = [
  [1, 'Justin'],
  [2, 'John'],
  [3, 'Jupiter'],
]

// Union - this is a variable that can be multiple types but you can only assign one type
let pid: string | number = 22

// Enum - this is a variable that can be multiple types but you can assign names to the types
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
// console.log(Direction1.Down)
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
// console.log(Direction2.Left)

// Objects - this is an object with a specific type for each key value pair in the object literal syntax (key: value)

type User = {
  id: number
  name: string
}
const user: User = {
  id: 1,
  name: 'Justin',
}

// Type Assertion - this is a way to tell the compiler that you know better than it does what the type of a variable is
let cid: any = 1
// let customerId = <number>cid // this is the old way
let customerId = cid as number // this is the new way

customerId = 5 // this will work because we told the compiler that cid is a number

// Functions - this is a function that takes a string and returns a string (the return type is inferred) and the parameter is optional
// function addNum(x, y) {
//   return x + y
// }

function addNum(x: number, y: number): number {
  return x + y
}
// console.log(addNum(1, 2))

// Void - this is a function that doesn't return anything (the return type is inferred)
function log(message: string | number) {
  console.log(message)
}
// log('Hello World')
// log(5)

// Interfaces - this is a way to define a type for an object that can be reused in multiple places
interface UserInterface {
  // id: number // this is a required property
  readonly id: number // this is a read only property
  name: string // this is a required property
  age?: number // this is an optional property
}
const user1: UserInterface = {
  id: 1,
  name: 'Justin',
}

// user1.id = 5 // this will not work because id is read only

// Interfaces with functions
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y

// Classes - this is a way to define a type for an object that can be reused in multiple places and can have methods and properties on it
// you can access the properties of the class with the this keyword
// these are public by default, but you can also make them private or protected
interface PersonInterface {
  // id: number // this is a required property
  id: number // this is a read only property
  name: string // this is a required property
  register(): string // this is a required method
}

class Person implements PersonInterface {
  id: number // this is a way to make a property public
  name: string // this is a way to make a property public
  private age: number // this is a way to make a property only accessible to the class
  // protected protectedAge: string // this is a way to make a property only accessible to the class and any classes that extend it

  constructor(id: number, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }

  register() {
    return `${this.name} is now registered`
  }
}

const justin = new Person(1, 'Justin', 35)
const john = new Person(2, 'John', 65)

class Employee extends Person {
  position: string

  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age)
    this.position = position
  }
}

const emp = new Employee(3, 'Jupiter', 25, 'CEO')

// console.log(justin) // this will work because id and name are public
// console.log(john) // this will work because id and name are public
// console.log(justin.id) // this will work because id is public
// console.log(justin.name) // this will work because name is public
// console.log(justin.age) // this will not work because age is private
console.log(justin.register()) // this will work because register is public
console.log(employee)
console.log(emp.name)

// Generics - this is a way to make a function reusable for multiple types of data (this is a function that takes a string and returns a string)
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['justin', 'john', 'jupiter'])

numArray.push(5)
// numArray.push('hello') // this will not work because we told the compiler that the array is a number array
console.log(numArray)

strArray.push('hello')
console.log(strArray)
