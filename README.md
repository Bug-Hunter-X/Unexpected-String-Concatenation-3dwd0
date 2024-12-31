# Unexpected String Concatenation in JavaScript

This example demonstrates an issue with unexpected string concatenation in JavaScript when using the '+' operator with numbers and strings.  The function `foo` intends to add two numbers, but because the second argument is a string, JavaScript performs string concatenation instead of numerical addition.