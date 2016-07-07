/*The fibonacci sequence is a mathematical sequence of integers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

0, 1, 1, 2, 3, 5, 8, 13, ..

Define a function called fibonacci with a single argument n The function should return the nth number of the fibonacci sequence.*/

function fibonacciA(n){
    var fibo = [0,1];
    for (var i = 2; i <= n; i++) {
    fibo.push(fibo[i-1]+fibo[i-2])
    }
    return fibo[n]
}

function fibonacciB(n){
    if(n>1)  {
        return  fibonacci(n-1) + fibonacci(n-2);
    } else {
        return n;
    }   
}

function fibonacciC(n){
    if( n>1 ) return (fibonacci(n-1) + fibonacci(n-2));
    else return (n===1) ? 0 : 1;  
}
