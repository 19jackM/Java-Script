let num1 = prompt('enter your num1'); 
let op = prompt ('enter your operator');
let num2 = prompt('enter your  second num2');


if (op ==='+'){
    console.log ('your answer is '+ (num1 + num2));
}

 
else if (op ==='-'){
    console.log (' your answer is '+ (num1 - num2));
}

else if (op ==='*'){
    console.log (' your answer is '+ (num1 * num2));

}
else if (op==='/'){
    console.log (' your answer is '+ (num1 / num2));

}


else{
console.log(num1/num2);
    console.log('invalid operator');
}