let Fname = prompt('enter your name');
let Age = Number(prompt('Enter your age'));
let citizen = prompt('Enter your citizenship');


if(Age >= 18 && citizen === 'SA'){
alert('Hi ' + Fname+ ' Congres you qualifiy to vote!!');
} else{

    alert('Hi ' +  " Sorry you don't qualifiy to vote! \n Coz you either young or not SA citizen");
}




