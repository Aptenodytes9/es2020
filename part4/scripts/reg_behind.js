let re1 = /いろ(?=はに)/g;
let re2 = /いろ(?!はに)/g;
let re3 = /(?<=。)いろ/g;
let re4 = /(?<!。)いろ/g;
let msg1 = 'いろはにほへと';
let msg2 = 'いろものですね。いろいろと';
console.log(msg1.match(re1));
console.log(msg2.match(re1));
console.log(msg1.match(re2));
console.log(msg2.match(re2));
console.log(msg1.match(re3));
console.log(msg2.match(re3));
console.log(msg1.match(re4));
console.log(msg2.match(re4));