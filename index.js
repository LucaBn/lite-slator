// Create a different json file for each language and import the one you need
import data from "./lang/en-GB.json" assert { type: "json" };

export const t = (key, ...variables) => {
  // Find reference in data object
  key = key.split(".");
  let stringToReturn = data;
  key.forEach((level) => (stringToReturn = stringToReturn[level]));

  // Replace variables with passed values
  variables
    .flat()
    .forEach(
      (variable) =>
        (stringToReturn = stringToReturn.replace(
          `$\{${Object.keys(variable)}}`,
          Object.values(variable)
        ))
    );

  return stringToReturn;
};

// Examples
const basicTest = t("basic-test");
console.log(basicTest);

const testWithVariable = t("test-with-variable", { name: "Luca" });
console.log(testWithVariable);

const testWithArrayOfVariables = t("test-with-variables", [
  { firstName: "Mario" },
  { lastName: "Rossi" },
]);
console.log(testWithArrayOfVariables);

const testWithVariables = t(
  "test-with-variables",
  { firstName: "Mario" },
  { lastName: "Rossi" }
);
console.log(testWithVariables);

const testWithParentAndChild = t("parent-level.child-level");
console.log(testWithParentAndChild);

const testWithParentChildAndVariable = t(
  "parent-level.child-level-with-variable",
  { year: "1990" }
);
console.log(testWithParentChildAndVariable);
