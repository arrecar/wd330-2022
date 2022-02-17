//Flatten
console.log("Flatten");

let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce(function (previousValue,currentValue){
    return previousValue.concat(currentValue)
},
    []
);
console.log(flattened);

//Yowr own loop
console.log("Your own loop");

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);

//Content negotiation
const url = "https://eloquentjavascript.net/author";
const types = ["text/plain",
               "text/html",
               "application/json",
               "application/rainbows+unicorns"];

async function showTypes() {
  for (let type of types) {
    let resp = await fetch(url, {headers: {accept: type}});
    console.log(`${type}: ${await resp.text()}\n`);
  }
}

showTypes();
