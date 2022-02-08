/* Below are outputs from variables
1 Array length [5] | Array [1,-2,-8,4,5]
2 Array length [3] | Array [-12,-5,-137]
3 Array length [6] | Array [42,-5,12,21,5,24]
4 Array length [6] | Array [42,5,12,21,-5,24]
5 Array length [10] | Array [-5,-4,-2,12,-40,4,2,18,11,5]
6 Array length [0] | Array [] 
*/

let a,b;

function typeMsg(a){
    return "["+typeof(a)+"]\n";
}

//array builder for testing
function buildRandomArray() {
    let nOfElements = Math.floor((Math.random()*10)+10); /* Defines how many elements arrays will have. */
    let lowRange = -10;
    a = Array(nOfElements).fill().map(() => Math.round(Math.random() * nOfElements) + lowRange);
    return a;
}

a = buildRandomArray(); // "readLine"
b = a.toString(10);
console.error('type of a: '+typeof(a[0])); //should be string

const n = parseInt(a); //should be int
console.error("type of n: "+"["+typeof(n)+"]");
var inputs = b.split(' ');
console.error(inputs);
console.error('type of inputs: '+typeof(inputs));

console.error(typeMsg(a)+typeMsg(b)+typeMsg(n)+typeMsg(inputs));


let sp = ' ';


// const n = parseInt(readline()); // the number of temperatures to analyse
// var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

function test() {
    console.error('Array length ' + '[' + n + ']' + ' | Array ' + '[' + inputs + ']');
}

//test()