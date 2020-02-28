function division(num){
	length = String(num).length;
	let sum = 0;
	let prod = 1;
	if (num === 0){
		return('Cannot calculate.');
	}
	for(let i = 0; i < length; i++){
		sum += (num % 10);
		prod *= (num % 10);
		num = (num - num % 10) / 10;
	}
	if(prod % sum === 0){
		return(`Quotient is ${prod / sum}`)
	}else {
		return(`Reminder is ${prod % sum}`)
	}
}