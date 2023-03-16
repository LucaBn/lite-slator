# lite-slator

Minimal JavaScript translation library.

It's like i18n but worst!

---

## How to use

Import `index.js` script in your project.

Import your localized json object and assign it to `currentLanguageDictionary` variable.

Use `t()` function to get your translation by passing a string key and its optional variables.

Examples:

```js
/* This is my current dictionary */
const currentLanguageDictionary = {
  "simple-string": "Simple string",
  "string-with-variable": "My name is ${name}",
  "string-with-variables": "My full name is ${firstName} ${lastName}",
  "parent-level": {
    "child-level": "Second level",
    "child-level-with-variable": "I was born in ${year}",
  },
};
```

```js
/* Pass a key string */
t("simple-string");
// Output: Simple string
```

```js
/* Pass one variable */
t("string-with-variable", { name: "Luca" });
// Output: My name is Luca
```

```js
/* Pass an array of variables */
t("string-with-variables", [{ firstName: "Mario" }, { lastName: "Rossi" }]);
// Output: My full name is Mario Rossi
```

```js
/* Pass n variables */
t("string-with-variables", { firstName: "Mario" }, { lastName: "Rossi" });
// Output: My full name is Mario Rossi
```

```js
/* Pass one object with multiple properties as variable */
t("string-with-variables", { firstName: "Mario", lastName: "Rossi" });
// Output: My full name is Mario Rossi
```

```js
/* Pass a nested key string, dot character is the separator */
t("parent-level.child-level");
// Output: Second level
```

```js
/* Pass a nested key string and one variable */
t("parent-level.child-level-with-variable", { year: "1990" });
// Output: I was born in 1990
```

Same examples are also provided in `index.js` file

---

## Pro tip

If you are cool include the `index.min.js` file in your project and leave your coworkers astonished with the 185 bytes version of this library.

<i>SIIIIIIUUUUUUUUM</i>
