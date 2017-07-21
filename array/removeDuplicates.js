/**
 *仅使用Array
 *时间复杂度 O(N*N),空间复杂度O(N)
 */
function uniqueArray(arr){
	var retArray = [] ;
    for (var i = arr.length - 1; i >= 0; i--) {
    	if (retArray.indexOf(arr[i] == -1)) {
    		retArray.push(arr[i]);
    	}
    }
    return retArray;
}

/**
 *ES6 Array.from() 可将对象或字符串等内容转为数组
 *new Set() 成员值是唯一的，输出对象
 *时间复杂度 O(N),空间复杂度O(N)
*/
function uniqueArray(arr){
	return Array.from(new Set(arr));
}

/**
 *Objict+Array方法
 *使用Object[key]进行哈希查找
 *时间复杂度 O(N),空间复杂度O(N)，速度最快
*/
goog.array.removeDuplicates = function(arr, opt_rv, opt_hashFn) {
  var returnArray = opt_rv || arr;
  var defaultHashFn = function(item) {
    return goog.isObject(item) ? 'o' + goog.getUid(item) :
                                 (typeof item).charAt(0) + item;
  };
  var hashFn = opt_hashFn || defaultHashFn;

  var seen = {}, cursorInsert = 0, cursorRead = 0;
  while (cursorRead < arr.length) {
    var current = arr[cursorRead++];
    var key = hashFn(current);
    if (!Object.prototype.hasOwnProperty.call(seen, key)) {
      seen[key] = true;
      returnArray[cursorInsert++] = current;
    }
  }
  returnArray.length = cursorInsert;
};
