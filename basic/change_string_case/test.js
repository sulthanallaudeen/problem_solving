
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    var tempString = '';
    for(i=0;i<input.length;i++){
        var character = input[i];
        if (character == character.toUpperCase()) {
 tempString = tempString+character.toLowerCase()
} else if (character == character.toLowerCase()) {
 tempString = tempString+character.toUpperCase()
}
    }
    process.stdout.write(tempString);
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
