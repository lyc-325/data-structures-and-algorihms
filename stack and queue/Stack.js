/**
 * 栈的构造函数
 */
function Stack() {
	// 用数组来模拟栈
  	var items = [];

  	//push方法
  	this.push = function(element) {
  		items.push(element);
	};

	//pop方法
	this.pop = function(){
		return items.pop();
	}

	//peek方法
	this.peek = function() {
  		return items[items.length - 1];
	}

	//isEmpty方法
	this.isAmpty = function() {
  		return items.length === 0
	}

	//clear方法
	this.clear = function() {
  		items = [];
	}

	//size方法
	this.size = function() {
 		return items.length;
	}

	//toString方法
	this.print = function() {
 		console.log(items.toString());
	}
}

/**
 * 将10进制数字转为2进制数字
 * @param  {Number} decNumber 要转换的10进制数字
 * @return {Number}           转换后的2进制数字
 */
 function divideBy2(decNumber) {
 	var remStack = new Stack(),
 	rem,
 	binaryString = '';
 	while (decNumber > 0) {
 		rem = Math.floor(decNumber % 2);
 		remStack.push(rem);
 		decNumber = Math.floor(decNumber / 2);
 	}
 	while (!remStack.isAmpty()) {
 		binaryString += remStack.pop().toString();
 	}
 	return binaryString;
 };