var txt = 'Sulthan';
var txt1 = 'Sulthan Allaudeen';
var txttrim = '   Sulthan   ';
var no = '123';
console.log(txt.toUpperCase());
// Output: S U L T H A N
console.log(txt.toLowerCase());
// Output: s u l t h a n
console.log(txt.startsWith('S'));
// Output: true
console.log(txt.startsWith('s'));
// Output: false
console.log(txt.endsWith('n'));
// Output: true
console.log(txt.endsWith('N'));
// Output: false
console.log(txt.includes('Sul'));
// Output: true
console.log(txt.includes('sul'));
// Output: false
console.log(txt.indexOf('S'));
// Output: 0
console.log(txt.indexOf('s'));
// Output: -1
console.log(txt.lastIndexOf('a'));
// Output: 5
console.log(txt.lastIndexOf('A'));
// Output: -1
console.log(txt.charAt(0));
// Output: S
console.log(txt.charAt(1));
// Output: u
console.log(txt.startsWith('S'))
// Output: true
console.log(txt.endsWith('n'))
// Output: true
console.log(txt.startsWith('s'));
// Output: false
console.log(txt1.replace('a', 'A'));
// Output: SulthAn Allaudeen
console.log(txt1.replaceAll('a','@'))
// Output: Sulth@n @ll@udeen
console.log(txt.substring(0,3));
// Output: Sul
console.log(no.padStart(5,0))
// Output: 00123
console.log(no.padEnd(5,0));
// Output: 12300
console.log(txt.repeat(3));
// Output: SulthanSulthanSulthan
console.log(txt.trim());
// Output: Sulthan
console.log(txttrim.trimStart());
// Output: Sulthan
console.log(txttrim.trimEnd());
// Output:    Sulthan