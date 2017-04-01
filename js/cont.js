/**
 * Created by liuzheng on 2017/4/1.
 */

window.onload = function () {
    imageLoction("container", "box");
}
function imageLoction(parent, content) {
    //将parent 下的所有content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElemaent(cparent, content);
    // console.log(ccontent);
    var imgwidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgwidth);
    cparent.style.cssText = "with:" + imgwidth * cols + "px;margin: 0 auto";

    var BoxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < cols) {
            BoxHeightArr[i] = ccontent[i].offsetHeight;
        } else {
            var minheight = Math.min.apply(null, BoxHeightArr);
            var minIndex = getminheightLoction(BoxHeightArr, minheight);
            console.log(minheight);
            console.log(minIndex);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight + "px";
            // var aa = ccontent[minIndex].offsetLeft + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }
    }
}

function getminheightLoction(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i;
        }
    }
}

function getChildElemaent(parent, content) {
    var contenArr = [];
    var allcontent = parent.getElementsByTagName("*");
        for (var i = 0; i < allcontent.length; i++) {
            if (allcontent[i].className == content) {
                contenArr.push(allcontent[i]);
            }
    }
    return contenArr;
}