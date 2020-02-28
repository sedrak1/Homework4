function secondMax(arr){
	let maxIndex = 0;
	let secondMaxIndex = 0;
	for(let i = 0; i < arr.length - 1; i++){
		if(arr[maxIndex] < arr[i + 1]){
			maxIndex = i + 1;
		}
	}
	if(maxIndex === 0){
		arr.shift()
		for(let i = 0; i < arr.length - 1; i++){
			if(arr[maxIndex] < arr[i + 1]){
			maxIndex = i + 1;
			}
		}
		return maxIndex + 1;
	}
	for(let i = 0; i < arr.length; i++){
		if(i + 1 === maxIndex || maxIndex === 0){
			i++;
		}
		if(arr[secondMaxIndex] < arr[i + 1] ){
            secondMaxIndex = i + 1;
		}
	}
	return secondMaxIndex;
}