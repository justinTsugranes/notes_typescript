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

// Number
let age: number = 56

// String
let firstName: string = 'Justin'
let eyeColor: string = 'brown'

// Array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// Tuple
type stringAndNumber = [string, number]
let x: stringAndNumber = ['hello', 10]
let basket: [string, number]
basket = ['basketball', 5]

// Enum
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

// Any - !!!!!!!!!! Be careful with any !!!!!!!!!!
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

// Void
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

// Type Assertions
let ohhithere: any = 'OH HI THERE'
let strLength: number = (ohhithere as string).length
let strLength2: number = (<string>ohhithere).length

// Interfaces
interface User {
  name: string
  id: number
  email?: string
}

const user: User = {
  name: 'Justin',
  id: 0,
}

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
