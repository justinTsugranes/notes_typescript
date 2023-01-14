# TypeScript Notes

_Create a tsconfig.json_
tsc --init

_Compile ts file into js file_
tsc FILENAME

_Run in watch mode_
tsc --watch FILENAME

_Use TypeScript with `create-react-app`_

- if you want to creater a new directory
  `npx create-react-app PROJECT_NAME --template typscript`

or

- if you want to initialize in a currency directory
  `npx create-react-app . --template typescript`

Specify the output directory in the tsconfig.json

- In this project, I created a dist directory. I added the filepath to the tsconfig.json as well as the script in index.html
