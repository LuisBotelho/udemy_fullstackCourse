function isEven(num){
    return num%2===0;
}

function factorial(num){
    if(num < 2){
        return 1;
    }
    return num*factorial(num-1);
}

function kebabToSnake(string){
    return string.replace("-","_")
}