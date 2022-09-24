String.prototype.isUpperCase = function(s) {
 return String(this) === this.toUpperCase(); 
 
}

console.log("c".isUpperCase()) //> false
console.log("C".isUpperCase()) //> true
console.log("hello I AM DONALD".isUpperCase()) //> false
console.log("HELLO I AM DONALD".isUpperCase()) //> true
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()) //> false
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()) //> true
console.log("Hello World".isUpperCase()) //> false
console.log("hello world".isUpperCase()) //> false
console.log("HELLO WORLD".isUpperCase()) //> true