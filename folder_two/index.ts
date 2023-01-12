// Implicit Types - TypeScript will infer the type of the variable
let helloWorld = 'Hello World' // string
let helloWorld2 = 123 // number
let helloWorld3 = true // boolean
let helloWorld4 = { name: 'John Doe' } // object
let helloWorld5 = ['John Doe', 'Jane Doe'] // array
let helloWorld6 = null // null
let helloWorld7 = undefined // undefined
let helloWorld8 = Symbol('foo') // symbol
let helloWorld9 = () => 'Hello World' // function
let helloWorld10 = new Date() // Date
let helloWorld11 = /foo/ // RegExp
let helloWorld12 = new Error() // Error
let helloWorld13 = [1, 'foo'] // (number | string)[]
let helloWorld14 = [1, 'foo', true] // (number | string | boolean)[]
let helloWorld15 = [1, 'foo', true, { name: 'John Doe' }] // (number | string | boolean | object)[]
let helloWorld16 = [
  1,
  'foo',
  true,
  { name: 'John Doe' },
  ['John Doe', 'Jane Doe'],
] // (number | string | boolean | object | string[])[]
let helloWorld17 = [
  1,
  'foo',
  true,
  { name: 'John Doe' },
  ['John Doe', 'Jane Doe'],
  null,
] // (number | string | boolean | object | string[] | null)[]
let helloWorld18 = [
  1,
  'foo',
  true,
  { name: 'John Doe' },
  ['John Doe', 'Jane Doe'],
  null,
  undefined,
] // (number | string | boolean | object | string[] | null | undefined)[]
let helloWorld19 = [
  1,
  'foo',
  true,
  { name: 'John Doe' },
  ['John Doe', 'Jane Doe'],
  null,
  undefined,
  Symbol('foo'),
] // (number | string | boolean | object | string[] | null | undefined | symbol)[]

// Explicit Types - TypeScript will not infer the type of the variable

// Built-in Types

// Boolean
let isCool: boolean = true
let isPublished: boolean = true

// Number
let age: number = 56
let id: number = 5
let num: number
num = 5

// String
let firstName: string = 'Justin'
let eyeColor: string = 'brown'
let quote: string = 'Dodgers Rule!'

// Array
let ids: number[] = [1, 2, 3, 4, 5]
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// Tuple - this is an array of mixed types. the types have to be in the order specified
type stringAndNumber = [string, number]
let x: stringAndNumber = ['hello', 10]
let person: [number, string, boolean] = [1, 'Justin', true]
let basket: [string, number]
basket = ['basketball', 5]

// Tuple Array - this is an array of tuples
let employee: [number, string][]
employee = [
  [1, 'Justin'],
  [2, 'John'],
  [3, 'Jupiter'],
]

// Enum - this is a variable that can be multiple types but you can assign names to the types
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2]

enum Continents {
  North_America,
  South_America,
  Europe,
  Asia,
  Africa,
  Australia,
  Antarctica,
}

let region = Continents.Antarctica

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
let continent: Continents = Continents.Antarctica

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Down)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
console.log(Direction2.Left)

// Any - !!!!!!!!!! Be careful with any !!!!!!!!!!
let y: any = 'Hello'
let whatever: any = 'aghhhhhh noooooo!'
whatever = 5
whatever = true
whatever = {}
whatever = []
whatever = null
whatever = undefined
whatever = Symbol('foo')
whatever = () => 'Hello World'
whatever = new Date()
whatever = /foo/
whatever = new Error()
whatever = [1, 'foo']
whatever = [1, 'foo', true]
whatever = [1, 'foo', true, { name: 'John Doe' }]
whatever = [1, 'foo', true, { name: 'John Doe' }, ['John Doe', 'Jane Doe']]
whatever = [
  1,
  'foo',
  true,
  { name: 'John Doe' },
  ['John Doe', 'Jane Doe'],
  null,
]
whatever = [
  1,
  'foo',
  true,
  { name: 'John Doe' },
  ['John Doe', 'Jane Doe'],
  null,
  undefined,
]
whatever = [
  1,
  'foo',
  true,
  { name: 'John Doe' },
  ['John Doe', 'Jane Doe'],
  null,
  undefined,
  Symbol('foo'),
]

// Void - this is a function that doesn't return anything (the return type is inferred)
function log(message: string | number) {
  console.log(message)
}
log('Hello World')
log(5)

let sing = (): void => {
  console.log('lalalala')
}

// Null and Undefined
let meh: undefined = undefined
let noo: null = null

// Never
let error = (): never => {
  throw Error('oops')
}

// Objects - this is an object with a specific type for each key value pair in the object literal syntax (key: value)

type UserName = {
  id: number
  name: string
}
const username: UserName = {
  id: 1,
  name: 'Justin',
}

// Type Assertion - this is a way to tell the compiler that you know better than it does what the type of a variable is
let cid: any = 1
// let customerId = <number>cid // this is the old way
let customerId = cid as number // this is the new way

customerId = 5 // this will work because we told the compiler that cid is a number

let ohhithere: any = 'OH HI THERE'
let strLength: number = (ohhithere as string).length
let strLength2: number = (<string>ohhithere).length

// Functions - this is a function that takes a string and returns a string (the return type is inferred) and the parameter is optional
// function addNum(x, y) {
//   return x + y
// }

function addNum(x: number, y: number): number {
  return x + y
}
console.log(addNum(1, 2))

// Interfaces - this is a way to define a type for an object that can be reused in multiple places
interface User {
  name: string
  id: number
  email?: string
}

const user: User = {
  name: 'Justin',
  id: 0,
}

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

// Union - this is a variable that can be multiple types but you can only assign one type
let pid: string | number = 2

// Composing types -> Union Types
type WindowStates = 'open' | 'closed' | 'minimized'
type LockStates = 'locked' | 'unlocked'
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9

// const windowState: WindowStates = 'I dont know that this is not a window' // Error
// const odd: OddNumberUnderTen = 11 // Error
const odd: OddNumberUnderTen = 1 // OK

// Composing types -> Intersection Types
const getLength = (param: string | string[]) => {
  // return param.length // Error
}

console.log(getLength('test')) // 4
console.log(getLength(['test', 'test2'])) // 2

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
// console.log(employee)
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
