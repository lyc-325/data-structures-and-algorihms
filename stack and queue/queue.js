/**
 * 队列构造函数
 */
 function Queue() {
 	var items = [];

  //enqueue方法
  	this.enqueue = function(ele) {
  		items.push(ele);
  	};

//dequeue方法
	this.dequeue = function() {
		return items.shift()
	};

//front方法
	this.front = function() {
		return items[0];
	};
}

/**
 * 击鼓传花的小游戏
 * @param  {Array}  nameList 参与人员列表
 * @param  {Number} num      在循环中要被弹出的位置
 * @return {String}          返回赢家(也就是最后活下来的那个)
 */
 function hotPotato(nameList, num) {
 	var queue = new Queue();
 	for (var i = 0; i < nameList.length; i++) {
 		queue.enqueue(nameList[i]);
 	}
 	var eliminated = '';
 	while (queue.size() > 1) {
 		for (var i = 0; i < num; i++) {
 			queue.enqueue(queue.dequeue());
 		}
 		eliminated = queue.dequeue();
 		console.log(eliminated + " Get out!")
 	}
 	return queue.dequeue()
 }