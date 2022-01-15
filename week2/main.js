//TRIANGLE LOOP
console.log("Looping Triangle")
// assing "#" to a variable, in the loop, as long as the string lenght of the varialbe is 7 add a "#" to the string and print it to console
for (let x = "#";x.length < 8 ; x += "#"){
    console.log(x);
}

//FIZZBUZZ
console.log("FizzBuzz");
// loop that goes from 1 to 100. An empty string is created, if the number is divisible by 3, it adds "Fizz" to the string, if the number is divisible by 
//5 it adds "buzz" tot he string
//then it outputs the string and if the string is empty it outputs the number
for (x=1;x<=100;x++){
   let output = ""
   if (x%3 === 0) {output += "Fizz"}
   if (x%5 === 0) {output += "Buzz"}
   console.log(output || x)
}

//Chessboard
console.log("Chessboard");
/**
 * Size is the size of the board. Then an empty string is created. Finally we have two loops, one tha
 */
let size = 8
let string = ""
for(line = 1;line<=size;line++){
    for (column = 1;column <=size;column++){
        if ((line+column) %2 === 0){
            string += " "
        }else {
            string += "#"
        }
    }
    string += "\n"
}
console.log(string);

//Min
console.log("MIN");
function min(x,y){
    if(x<y){
        return x
    }else {
        return y
    }
}

let first = min(0,10);
console.log(min(0,10));
console.log(min(0,-10));

//Recursive
console.log("Recursive")
function isEven(x){
    if (x == 0) return true;
    else if (x == 1) return false;
    else if (x < 0) return isEven(-x);
    else return isEven(x-2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Bean Counting
console.log("Bean Counting");

function countBs(str){
    let count = 0
    for (x=0;x<str.length;x++){
        if (str[x] === "B") count ++
    }
    return count;
}

function countChar(str,character){
    let count = 0
    for (x=0;x<str.length;x++){
        if (str[x] === character) count ++
    }
    return count;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak","k"));