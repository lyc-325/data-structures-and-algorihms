/**
 * 重新画一个一样的
 */
var img = new Image();
img.src = “/test.jpg”; //通过FileReader等
img.onload = function(){
    //画到canvas上，位置为x = 10, y = 10
    ctx.drawImage(this, 10, 10);
}

/**
 * 黑白处理，Gray = (Red * 0.3 + Green * 0.59 + Blue * 0.11)
 */
function blackWhite() {
    var imgData = ctx.getImageData(10, 10, 31, 30);
    var data = imgData.data;
    var length = data.length;
    for(var i = 0; i < length; i += 4){
        var grey = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
        data[i] = data[i + 1] = data[i + 2] = grey;
    }
    ctx.putImageData(imgData, 50, 10);
}