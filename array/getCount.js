//arr, rank->长度，默认为数组长度，ranktype，排序方式，默认降序
function getCount(arr, rank，ranktype){ 
    var obj = {}, k, arr1 = []
    //记录每一元素出现的次数
    for (var i = 0, len = arr.length; i < len; i++) {
        k = arr[i];
        if (obj[k]) {
            obj[k]++;
        }
        else {
            obj[k] = 1;
        }
    }
    //保存结果{el-'元素'，count-出现次数}
    for (var o in obj) {
        arr1.push({el: o, count: obj[o]});
    }
    //排序（降序）
    arr1.sort(function (n1, n2) {
        return n2.count - n1.count
    });
    //如果ranktype为1，则为升序，反转数组
    if(ranktype===1){
        arr1=arr1.reverse();
    }
    var rank1 = rank || arr1.length;
    return arr1.slice(0,rank1);
}


//求一个数组中最大子列和 T(N) = O(N)
function maxSubseqSum(arr) {
    let thisSum = maxSum = 0
    for (var i = arr.length - 1; i >= 0; i--) {
        thisSum += arr[i]    //向右依次累加
        if (thisSum > maxSum) {
            maxSum = thisSum   //找到更大的和便更新结果
        }else if (thisSum < 0) {
            thisSum = 0   //如果当前和<0 则不可能使后面增大，抛弃
        }
    }
    return maxSum
}