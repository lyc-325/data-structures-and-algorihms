function MaxArr(arr){
	return Math.max.apply(null,arr);
}

function MinArr(arr){
	return Math.min.apply(null,arr);
}

//ES6 扩展运算符

const MaxArr = (arr) =>{
	Math.max(...arr)
}