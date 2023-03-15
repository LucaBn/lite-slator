# lite-slator

Minimal JavaScript translation library.

It's like i18n but worst!

---

## How to use

Import index.js script in your project.

Add json files containing localized strings.

Use `t()` function to get your translation by passing a string key and its optional variables.

Examples:

```js
t("basic-test");
// Basic test
```

```js
/* Note that if you have only one variable you can pass an object */
t("test-with-variable", { name: "Luca" });
// My name is Luca
```

```js
/* Note that if you have more than one variable you have to pass an array of objects */
t("test-with-variables", [{ firstName: "Mario" }, { lastName: "Rossi" }]);
// My full name is Mario Rossi
```

```js
t("parent-level.child-level");
// Second level
```

```js
t("parent-level.child-level-with-variable", { year: "1990" });
// I was born in 1990
```

Same examples are also provided in `index.js` file

---

## Pro tip

If you are cool include the `index.min.js` file in your project and leave your coworkers astonished with the 176 bytes version of this library <i>SIIIIIIUUUUUUUUM</i>
