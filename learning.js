// let text = "Visit      ghjgg.  jkkkjhj.  W3Schools!"; 
// let n = text.search("W3Schools");
// console.log(n);

// Regular expressions using
let text = "Visit        W3Schools!"; 
let n = text.search(/w3Schools/i);

console.log(n);


// Regular expression arguments (instead of string arguments) can be used in the methods above.
// Regular expressions can make your search much more powerful (case insensitive for example).
// RegExp object is a regular expression object with predefined properties and methods.