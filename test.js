import fs from "fs";

const tests = [
  {
    name: "package.json exists",
    passed: fs.existsSync("package.json"),
  },
  {
    name: "src folder exists",
    passed: fs.existsSync("src"),
  },
  {
    name: "App.jsx exists",
    passed: fs.existsSync("src/App.jsx"),
  },
  {
    name: "Jenkinsfile exists",
    passed: fs.existsSync("Jenkinsfile"),
  },
];

const passed = tests.filter(test => test.passed).length;
const failed = tests.length - passed;

console.log("\n===== AUTOMATED TEST RESULT =====");

tests.forEach(test => {
  console.log(`${test.passed ? "PASS" : "FAIL"} - ${test.name}`);
});

console.log(`\nPassed: ${passed}`);
console.log(`Failed: ${failed}`);

if (failed > 0) {
  process.exit(1);
}