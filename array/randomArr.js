/**
*创建一个a-b的数组
*/
function createArr(a,b){
	var newArr = [];
	for(let i = 0;i < b-a+1;i++){
		newArr[i] = a+i;
	}
	return newArr;
}
/**
*把数组随机打乱
*/
function randomArr(arr){
	for (var i = arr.length - 1; i >= 0; i--) {
		var swapIndex = praseInt(Math.random()*(arr.length-i))+i;
		var tmp = arr[i];
		arr[i] = arr[swapIndex];
		arr[swapIndex] = tmp;
	}
}