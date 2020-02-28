function emptySquare(num){
	let str = '';
	for(let i = 0; i < num; i++){
		if(i === 0 || i === num - 1){
			for(let j = 0; j < num; j++){
				str += '* ';
			}
		} else {
			str += '\n';	
			str += '* ';
			for(let j = 1; j < num - 1; j++){
				str += '  ';
			}
			str += '*';
			str += '\n';
		}
	}
	return str;
}	