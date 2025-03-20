process.stdin.resume();
process.stdin.setEncoding("utf-8");

var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    var lines = input.trim().split("\n"); // Trim input & split by line
    var measure = parseInt(lines[0]); // Convert measure to an integer
    var count = parseInt(lines[1]);   // Convert count to an integer

    for (var i = 0; i < count; i++) { // Correct loop condition
        var currentmeasure = lines[i + 2]; // Start from index 2
        if (!currentmeasure) continue; // Skip undefined lines

        var [width, height] = currentmeasure.split(" ").map(Number); // Convert to numbers

        if (width >= measure && height >= measure) {
            if (width === height) {
                console.log("ACCEPTED");
            } else {
                console.log("CROP IT");
            }
        } else {
            console.log("UPLOAD ANOTHER");
        }
    }
}
