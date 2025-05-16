
// 01. Add to Numbers

function add(a,b){
    let result = a+b;
    return result;
}

console.log(add(100,500));


// 02. Enen or Odd Checker

function isEven(num){
    // if(num % 2 == 0){
    //     return "This Number is Even";
    // }else{
    //     return "This Number is Odd";
    // }

    return num%2 == 0 ? "Even" : "Odd";
}

console.log(isEven(11));


// 03. Convert Celsius to Fahrenheit

function CelsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32 ;
}

console.log(CelsiusToFahrenheit(10));

// 04. Square of a Number

function squareNumber(number){
    return number * number;
}

console.log(squareNumber(10));

// 05. Get First Character of a String

function firstCharacter(str){
    return str.charAt(5);
}

console.log(firstCharacter("Rezwanur"));

// 06. Number is positive or Negative

function isPositive(num){
    // if(num >= 0){
    //     return "Positive";
    // }else{
    //     return "Negative";
    // }

    return num >= 0 ? "Positive" : "Negative";

    // switch (true) {
    //     case num > 0:
    //         console.log("Positive number");
    //         break;
    //     case num < 0:
    //         console.log("Negative number");
    //         break;
    //     case num === 0:
    //         console.log("Zero");
    //         break;
    //     default:
    //         console.log("Invalid input");
    // }
}

console.log(isPositive(1));


// 07. Multipy two number

function multipy(x,y){
    if(typeof (x) !== "number"){
        return "1st Number is not a number";
    }else if(typeof (y) !== "number"){
        return "2nd Number is not a number";
    }else{
        return x * y;
    }
}

console.log(multipy(10,25));

// 08. Convert minuts to second

function minutesToSecond(minute){
    return minute * 60;
}

console.log(minutesToSecond(5));

// 09. Concatenate Two Strings

function concatenate(x,y){
    return x + " " + y;
}

console.log(concatenate("Hello", "JavaScript"));

// 10. check if string contains a word

function checkWord(sentence, word){
    return sentence.includes(word);
}
console.log(checkWord("I love JavaScript", "JavaScript"));
