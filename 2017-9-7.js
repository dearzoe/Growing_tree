//排序算法
//冒泡排序1
  var ary = [1, 2,2,2,2,2,2, 3, 6, 8, 12, 7, 4, 9, 32, 1, 3, 2, 4, 9, 0, 45, 5, 22];
    function sortAry() {
        for (var i = 0; i < ary.length- 1; i++) {

            for (var j = 0; j < ary.length-1-i; j++) {
                var a = ary[j], b = ary[j + 1];
                if (a > b) {
                    var c=ary[j];
                    ary[j]=ary[j + 1];
                    ary[j + 1]=c;
                }
            }
        }return ary
    }
    sortAry()
    //冒泡排序2（条件不同）
    var ary = [1, 2,2,2,2,2,2, 3, 6, 8, 12, 7, 4, 9, 32, 1, 3, 2, 4, 9, 0, 45, 5, 22];
function sortAry() {
    for (var i = ary.length; i >=2;--i) {
        for (var j = 0; j < i-1; ++j) {
            var a = ary[j], b = ary[j + 1];
            if (a > b) {
                var c=ary[j];
                ary[j]=ary[j + 1];
                ary[j + 1]=c;
            }
        }
    }return ary
}
sortAry()
//快速排序1
var a=[2,2,2,2,3,3,34,4,6,5,76,7,78,8,9,0,8];
     function kuaisu(ary){
         if(ary.length<=1){
             return ary
         }
         console.log("次数")
         var midIndex = Math.floor(ary.length / 2);
         var midIndexValue = ary.splice(midIndex, 1)[0];
         var left = [], right = [];
         for (var i =0; i < ary.length; i++) {
             var cur = ary[i];
             cur < midIndexValue ? left.push(cur) : right.push(cur);
         }
         return kuaisu(left).concat(midIndexValue, kuaisu(right))

     }
     console.log(kuaisu(a));
