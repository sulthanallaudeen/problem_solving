process.stdin.resume();
process.stdin.setEncoding("utf-8");

let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    const str = input.trim();
    const reversed = str.split("").reverse().join("");

    console.log(str === reversed ? "YES" : "NO");
    console.log(str);
    console.log(reversed);
}
