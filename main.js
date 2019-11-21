const reader = require("readline-sync");
const converter = require("./converter");

const n = reader.questionInt("Insert a number = ");
console.log(converter.convertToBinary(n));
console.log(converter.convertToHexa(n));