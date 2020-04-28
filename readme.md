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

## Type Guards

In TypeScript we use Type Gaurd when we are going to restore access to one of the specific types which we are dealing with inside a union operator.
For primitive values (number, string, boolean, symbol) we use `typeof` as a Type Guard otherwise we use `instanceof` a constructor function of type that we are going to check for as written in the following code:

```typescript
class Sorter {
	constructor(public collection: number[] | string) {}
	public sort(): void {
		const { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
        // All of this only works if collection is number[]
        // If collection is an array of numbers
        // Using Type Guard
        if(this.collection instanceOf Array){
          // type of collection is number[]
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // Only going to work if collection is string
        // Add Type Guard with different feature
        if {typeof this.collection === 'string'} {

        }
			}
		}
	}
}

```

## Abstract Classes

They are classes which are used only as a parent class and can not be used to create an object dirreclty. They can contain real implementation for some methods. The implemented methods can refer to other methods which do not actually exist yet (we still have to provide names and types for un-implemented methods). By using Abstract Classes we are making child classes promise to implement some other methods exist in Abstract Classes.
Here for `Sorter` class we no longer create and instance of this class anymore.

```typescript
export abstract class Sorter {
	// `abstract` is used to mark certain methods as existing in the future or essentially implemented by some child class.
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number; /*  Since it is a getter and simply returns a number */

	public sort(): void {
		const { length } = this;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
```
