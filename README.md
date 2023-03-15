# lite-slator

Minimal JavaScript translation library.

It's like i18n but worst!

---

## How to use

Import index.js script in your project.

Add json files containing localized strings.

Use `t()` function to get your translation by passing a string key and its optional variables.

Examples supposing `lang/en-GB.json` file is used as dictionary:

```js
/* Pass a key string */
t("basic-test");
// Output: Basic test
```

```js
/* Pass one variable */
t("test-with-variable", { name: "Luca" });
// Output: My name is Luca
```

```js
/* Pass an array of variables */
t("test-with-variables", [{ firstName: "Mario" }, { lastName: "Rossi" }]);
// Output: My full name is Mario Rossi
```

```js
/* Pass n variables */
t("test-with-variables", { firstName: "Mario" }, { lastName: "Rossi" });
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

If you are cool include the `index.min.js` file in your project and leave your coworkers astonished with the 206 bytes version of this library.

Just remember to import the correct json file.

<i>SIIIIIIUUUUUUUUM</i>
