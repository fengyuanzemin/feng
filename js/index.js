/**
 * Created by fengyuanzemin on 2017/7/9.
 */

console.log(pasition)

pasition.animate({
    from: 'M 40 40 Q 60 80 80 40T 120 40 T 160 40 z',
    to: 'M32,0C14.4,0,0,14.4,0,32s14.3,32,32,32 s32-14.3,32-32S49.7,0,32,0z',
    time: 1000,
    easing : function(){ },
    begin:function(shapes){ },
    progress : function(shapes, percent){
        //render you shape to svg or canvas or webgl
    },
    end : function(shapes){ }
});