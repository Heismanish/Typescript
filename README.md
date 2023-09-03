# TS - Installation and configuration ⚙️

### Installation:

```shell
sudo npm i -g typescript
```

### To verify:

```shell
run `tsc --version` it should give something like `Version 5.2.2`
```

**Woohooo!!🥳 Now we have done it we have typescript globally installed in our machines.**

---

### ❓ So how do we now compile our typescript files...?

👉 We use a command such as :

```shell
tsc index.ts
```

to compile our typescript file (here it's `index.ts`)

---

## Configuring typescript.

For configuration we will be needing our `tsocnfig.json` file. So we run:

```shell
tsc --init
```

✅ And upon it's sucessful execution we will see a `tsconfig.json` file in our folder.

### ⏱️ Time to check out some of these properties that we should enable before we start writing some typesript code:

1.  `"rootDir": "./src" ` : Specify the root folder within your typesript files will be.
2.  `"outDir": "./dist" `: Specify an output folder for all emitted files ( our compiled .js files)
3.  `"removeComments": true`: Disable emitting comments.
4.  `"noEmitOnError": true` : Disable emitting files if any type checking errors are reported.
5.  `"sourceMap": true` : Create source map files for emitted JavaScript files ( Makes debugging 🐛 easy )

And with that we are all configured ot get started eith coding in `Typescript`. From here on all we need to do is run `tsc` command in our terminal to compile all our .ts files and we will be seeing all our compiled files(.js) in `/dist` directory.
:flying_saucer:

---

#### ❓ Wanna use `any` type in you code?...

##### 👉 Here you go...`"noImplicitAny": true` this is the property you need to enable in you `tsconfig.json`.

---

### Working with Functions:

Here are some properties you need to consider to use power of typescript when you are on you journey of writing robust typescirpt code:

1. `"noUnusedParameters": true ` Raise an error when a function parameter isn't read.
2. `"exactOptionalPropertyTypes"` : true, Interpret optional property types as written, rather than adding 'undefined'.
3. `"noImplicitReturns": true` : Enable error reporting for codepaths that do not explicitly return in a function.
4. `"noUnusedLocals": true,`: Enable error reporting when local variables aren't read.
