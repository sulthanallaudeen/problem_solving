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
    var string = input.trim().split("");
    var forward = "";
    var backward = "";
    for(i=0;i<string.length;i++){
        forward = forward + string[i];
        backward = backward + string[string.length-i-1];
    }
    if(forward==backward){
        console.log('YES')
    } else {
        console.log('NO')
    }
    // console.log(string);
    console.log(forward);
    console.log(backward);
//    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}
