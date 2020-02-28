function fibonacci (num){
	let fib = 0;
	let i = 1;
	let fibArr = [0, 1];
	while(num >= fib){
		fib = fibArr[i] + fibArr[i - 1]; 
		i++;
		fibArr.push(fib);
	}
	fibArr.pop();
	return fibArr;
}