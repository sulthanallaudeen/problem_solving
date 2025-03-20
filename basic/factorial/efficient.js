process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input.trim();  // Read input and trim whitespace
});

process.stdin.on("end", function () {
   main(parseInt(stdin_input, 10)); // Convert input to integer
});

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = BigInt(1);  // Use BigInt for large numbers
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}

function main(N) {
    console.log(factorial(N).toString());  // Convert BigInt to string for output
}
