
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
var lines = input.split("\n");
var measure = lines[0];
var count=lines.length-lines[1];
for(i=0;i<=count;i++){
    //console.log(lines[i+count])
    var currentmeasure = lines[i+count];
    currentmeasure = currentmeasure.split(" ");
    if(currentmeasure[0]<=measure&&currentmeasure[1]<=measure){
        console.log('ACCEPTED')
    } else if(currentmeasure[0]>measure&&currentmeasure[1]>measure){
        console.log('CROP IT')
    } else if (currentmeasure[0]<=measure||currentmeasure[1]<=measure){
        console.log('UPLOAD ANOTHER')
    }
}
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
