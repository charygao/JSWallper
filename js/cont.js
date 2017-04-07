/**
 * Created by liuzheng on 2017/4/1.
 */

window.onload = function () {
    imageLoction("container", "box");

    window.onscroll = function () {

    }
}

function checkFlag() {
    
}
function imageLoction(parent, content) {
    //将parent下的所有content全部取出
    var cparent = document.getElementById(parent);
    var ccontentArr = getChildElemaent(cparent, content);
    //返回元素宽度
    var imgwidth = ccontentArr[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgwidth);
    cparent.style.cssText = "with:" + imgwidth * cols + "px;margin: 0 auto";
    //承载盒子的高度
    var BoxHeightArr = [];
    for (var i = 0; i < ccontentArr.length; i++) {
        if (i < cols) {
            //将获取到的盒子的高度保证在BoxHeightArr中
            BoxHeightArr[i] = ccontentArr[i].offsetHeight;
        } else {
            //获取最小的高度
            var minheight = Math.min.apply(null, BoxHeightArr);
            var minIndex = getminheightLoction(BoxHeightArr, minheight);
            console.log(minheight);
            console.log(minIndex);
            //设置为绝对布局
            ccontentArr[i].style.position = "absolute";
            //设置盒子居上的位置
            ccontentArr[i].style.top = minheight + "px";
            //设置盒子居左的位置
            ccontentArr[i].style.left = ccontentArr[minIndex].offsetLeft + "px";
            //将最BoxHeightArr中高度最短加上最新添加的图片高度
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontentArr[i].offsetHeight;
        }
    }
}

//获取最小高度 在BoxHeightArr中所对应的盒子位置i
function getminheightLoction(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i;
        }
    }
}

function getChildElemaent(parent, content) {
    var contenArr = [];
    //返回文档中所有元素的列表，元素排列的顺序就是它们在文档中的顺序。
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == content) {
            contenArr.push(allcontent[i]);
        }
    }
    return contenArr;
}