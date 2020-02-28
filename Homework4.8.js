function pattern(num){
	let str = '';
	let numCopy = num;
	for(let i = 0; i < 2 * num + 1; i++){
		if(i <= num){
			for(let j = 1; j < i + 1; j++){
				str += j;
			}
			str+= '\n';
		}else{
			for(let j = 1; j < numCopy; j++){
				str += j;
			}
			numCopy --;
			str += '\n';
		}
	}
	return str;
}