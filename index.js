/*
 *  USAGE EXAMPLE
 */

// Suppose these are your objects containing localized strings
const en = {
  "simple-string": "Simple string",
  "string-with-variable": "My name is ${name}",
  "string-with-variables": "My full name is ${firstName} ${lastName}",
  "parent-level": {
    "child-level": "Second level",
    "child-level-with-variable": "I was born in ${year}",
  },
};
const it = {
  "simple-string": "Stringa semplice",
  "string-with-variable": "Il mio nome è ${name}",
  "string-with-variables": "Il mio nome completo è ${firstName} ${lastName}",
  "parent-level": {
    "child-level": "Secondo livello",
    "child-level-with-variable": "Io sono nato nel ${year}",
  },
};

// Set your current language dictionary
const currentLanguageDictionary = en;

// t() function
const t = (key, ...variables) => {
  // Find reference in currentLanguage object
  const keys = key.split(".");
  let stringToReturn = keys.reduce(
    (obj, k) => obj[k],
    currentLanguageDictionary
  );

  // Replace variables with passed values
  // Accumulators are all named stringToReturn just to create confusion ( ͡° ͜ʖ ͡°)
  return variables
    .flat()
    .reduce(
      (stringToReturn, variable) =>
        Object.entries(variable).reduce(
          (stringToReturn, [variableKey, variableValue]) =>
            stringToReturn.replace(`$\{${variableKey}}`, variableValue),
          stringToReturn
        ),
      stringToReturn
    );
};

// Examples
const simpleString = t("simple-string");
console.log(simpleString);

const stringWithVariable = t("string-with-variable", { name: "Luca" });
console.log(stringWithVariable);

const stringWithArrayOfVariables = t("string-with-variables", [
  { firstName: "Mario" },
  { lastName: "Rossi" },
]);
console.log(stringWithArrayOfVariables);

const stringWithVariables = t(
  "string-with-variables",
  { firstName: "Mario" },
  { lastName: "Rossi" }
);
console.log(stringWithVariables);

const objectWithMultipleVariables = t("string-with-variables", {
  firstName: "Mario",
  lastName: "Rossi",
});
console.log(objectWithMultipleVariables);

const parentAndChild = t("parent-level.child-level");
console.log(parentAndChild);

const parentChildAndVariable = t("parent-level.child-level-with-variable", {
  year: "1990",
});
console.log(parentChildAndVariable);
