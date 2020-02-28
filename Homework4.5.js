function repeat(arr, padAmount, repeat){
	let resArr = [];
	if(padAmount <= arr.length){
		for(let i = 0; i < repeat; i++){
			for(let j = 0; j < padAmount; j++){
				resArr.unshift(arr[padAmount - 1 - j]);
			}
		}
		resArr = resArr.concat(arr);
		for(let i = 0; i < repeat; i++){
			for(let j = 0; j < padAmount; j++){
				resArr.push(arr[arr.length - padAmount + j]);
			}
		}
		return resArr;
	} else {
		console.log('Invalid padding amount');
	}
	
}