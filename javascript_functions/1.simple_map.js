console.log('Map function');
var array = [1, 2, 3, 4, 5];
array.map(x=>{
    console.log(x);
})
// Output: 1 2 3 4 5
console.log('Map with Split');
var string = 'Hello world';
string.split('').map(x=>{
    console.log(x)
})
// Output: H e l l o   w o r l d
console.log('Map with Split and Trim');
var string = ' Hello world ';
string.trim().split('').map(char=>{
    console.log(char);
})
// Output: H e l l o   w o r l d
console.log('Vowels - includes');
var string = 'SULTHAN';
var vowels = 'AEIOU';
string.split('').map(char=>{
    if(vowels.includes(char)){
        console.log(char);
    }
})
// Output: U A
console.log('Reverse');
var string = 'SULTHAN';
string.split('').reverse().map(char=>{
    console.log(char);
})