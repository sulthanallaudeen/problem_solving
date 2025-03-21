
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    console.log(stdin_input.trim().split("").map(char =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join(""));
});
