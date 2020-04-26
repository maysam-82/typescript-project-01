## Introduction

In this project we will write a sorting logic one time to sort all different kind of data structure such as number, string, ... .

### To add tsconfig.json inside project folder:

- create two folders named `build` and `src` inside main project folder.
- In `src` folder create index.ts file.
- In command line enter `tsc --init` to generate `tsconfig.json` file.

### To Change tsconfig.json:

- Inside `tsconfig.json` change uncomment following properties and change their value to `src` and `build`:

  ```json
  "outDir": "./build" /* Redirect output structure to the directory. */,
  "rootDir": "./src" /* Specify the root directory of input files. Use to control the output
  ```

### To watch all changed `.ts` files and compile them to `.js` file:

- In terminal enter `tsc -w` to watch all `.ts` files inside `src` folder and change them to `.js` files and copy them into `build` folder.

### To Automate all code running concurrently:

- Enter `npm init -y` in terminal.
- Enter `npm i nodemon concurrently`.
- Delete the existing scripts in `script` property in `package.json` file and add the following scripts to:

  ```json
  "scripts":
  {
  "start:build": "tsc -w",
  "start:run": "nodemon build/index.js",
  "start": "concurrently npm:start:*"
  }
  ```

- Enter `npm start`
