//Task #1

const uah = 8;
function convert(usd) {
    const exchenge = usd * uah;
    return `${exchenge.toFixed(2)} uah`;
}

//Task #2

function reverse(str) {
    reverse = str.split('').reverse().join('');
    return `${reverse}`;
}

//Task #3

function printStairs(n) {
    let img = '#';
    let str = '';
    for(let i=0; i < n; i++){
         console.log(str += img);
    }
}

//Task #4

function sumRange(start, end) {
    let sum = 0;
    for(let i=start; i <= end; i++){
        sum += i;
    }
    return sum;
}

//Task #5

function min(a, b, c) {
    if (a <= b && a <= c) {
        console.log(a);
    }else if (b <= a && b <= c) {
        console.log(b);
    }else {
        console.log(c);
    }
}

//Task #6


//Task #7


function firstAndLastToUpper(str) {
        return str[0].toUpperCase() + str.toLowerCase().slice(1,str.length-1) +
           str[str.length -1].toUpperCase() ;

}

//Task #8

function cursorCheck(str) {
    let check = str.toLowerCase();
    if (~check.indexOf('ironman')){
        console.log(true);
    }
    else if (~check.indexOf('cursor')){
        console.log(true);
    }
    else if (~check.indexOf('ostap')){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

//Task #9

//Task #10

function removeDuplicationLetters(str) {
    let dublicateLatters=' ';
    for (let i = 0; i < str.length; i++){
        if (str[i] == ' '){
            dublicateLatters += str[i];
        }else if (dublicateLatters.toLowerCase().indexOf(str[i]) == -1 &&
                  dublicateLatters.toUpperCase().indexOf(str[i]) == -1) {
            dublicateLatters += str[i];
        }
    }
    return dublicateLatters;
}

//Task #11

function fibonacci(n){
    // let number;
    // if (n>=2){
    //     number =fibonacci(n-1) + fibonacci(n-2);
    // } else{
    //     number=n;
    // }
    // return number
    // Это вариант работает но после 30 перестает выдавать значения

    if (fibonacci.cache[n] === undefined){
        fibonacci.cache[n] = fibonacci(n-1) + fibonacci(n-2);
    }
    return fibonacci.cache[n]
}
fibonacci.cache = [0, 1, 1];