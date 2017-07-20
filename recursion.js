/**
*实现上一次请求完成后完成下一次请求
*/
var ids = [34112, 98325, 68125];
(function sendRequest(){
    var id = ids.shift();
    if(id){
        $.ajax({url: "/get", data: {id}}).always(function(){
            //do sth.
            sendRequest();   ///重新调用函数，直至结束
        });
    } else {
        console.log("finished");
    }
})(); 


/**
*DOM树遍历
*/
function getElementById(node,id){
    if (!node) return null;
    if (node.id === id) return node;
    for (var i = 0; i < node.childNodes.length; i++) {
        let found = getElementById(node.childNodes[i],id);
        if (found) return found;
    }
    return null;
}