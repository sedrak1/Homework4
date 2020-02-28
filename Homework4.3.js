function difference(arr){
	let max = -Infinity;
	let min = Infinity;
	for(let i = 0; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
		}
		if(min > arr[i]){
			min = arr[i];
		}
	}
	if(arr.includes(max-min)){
		return true;
	}
	else{
		return false;
	}
}