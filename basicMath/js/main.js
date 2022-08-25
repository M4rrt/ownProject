/**
*## confere se o número é impar
* @param input number
*/
function isOdd(input){
    return (input % 2 === 0) ? false : true;
}

function isPrime(num) {
    for (let i = 2; i * i <= num; i++){
        if (num % i === 0){
            return false; 
        }
    }
    return num > 1;
}


