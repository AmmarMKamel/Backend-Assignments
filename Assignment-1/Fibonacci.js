function fibonacci(limit) {
    let num1 = 0, num2 = 1;
    let sequence = '';
    while (num1 <= limit) {
        sequence += num1 + ', ';
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    console.log(sequence.slice(0, -2));
}
  
fibonacci(20);