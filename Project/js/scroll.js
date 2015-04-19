/*
 主题名称: 滚动效果
 描述：滚动插件
 作者: 阅兵小将
 博客：www.divjs.cn
 */
(function ($) {
    $.fn.easysroll= function(options) {
     var parameter= {
            //默认配置参数
            direction: "left", //滚动方向  left（向左）right（向右） top(向上) bottom(向下)
            numberr: "1", //每一次滚动数量
            delays:"1000",//完成一次动画所需时间
            scrolling: "1000",//每一次动画的时间间隔
            fadein: false,//是否支持淡入或淡出
            enterStop:true  //鼠标移入是否暂停滚动
         };
        var ops = $.extend(parameter,options);
        var $this=$(this);
        var _this=this;
        var _time=null;
        var obj=_this.find("[type='box']");
        var items=obj.find("li");
        var itemsleg=items.length;//获取li的数目
        var itemsW=items.outerWidth(true);//获取每个li元素的宽度
        var itemsH=items.outerHeight(true);//获取每个li元素的高度
        var _direction=ops.direction;
        var _numberr =ops.numberr;
        var _delays=ops.delays;
        var _scrolling =ops.scrolling;
        var _fadein=ops.fadein;
        var _enterStop=ops.enterStop;
        //判断获取盒子宽高等等数据
        if(_direction=="top" || _direction=="bottom")
        {
            items.css({"float":"none"});
            obj.width(itemsW*itemsleg);
         if(_direction=="bottom")   {
                obj.css("margin-top",-_numberr*itemsH);
            }
        }else if(_direction=="left" || _direction=="right"){
             items.css({"float":"left"});
            obj.width(itemsW*itemsleg);

        if(_direction=="right")   {
            obj.css("margin-left",-_numberr*itemsW);
         }
        }else{
            alert("您配置的滚动方向有误，请重新配置");
            return true;
        }
        function scroll(){
        //方向判断方向
        if(_direction=="left"){
              obj.animate({"margin-left":-_numberr*itemsW},Number(_delays),function(){
                 for (var i=0;i<_numberr;i++){
                     obj.find("li").eq(0).appendTo(obj);
                 }
                    obj.css({"margin-left":0})
               if(_fadein){
                      obj.find("li").eq(0).animate({"opacity":0},Number(_delays));
                      obj.find("li").eq(itemsleg-1).css({"opacity":1});
                     }
            });
        }else if(_direction=="right"){
            obj.animate({"margin-left":0},Number(_delays),function(){
               for(var i=0;i<_numberr;i++){
                    obj.find("li").eq(itemsleg-1).prependTo(obj);
                };
              obj.css("margin-left",-_numberr*itemsW);
                if(_fadein){
                    obj.find("li").eq(0).animate({"opacity":1},Number(_delays));
                    obj.find("li").eq(itemsleg-1).css({"opacity":0});
                }
            });
           }else if(_direction=="top"){
            obj.animate({"margin-top":-_numberr*itemsH},Number(_delays),function(){
                for (var i=0;i<_numberr;i++){
                    obj.find("li").eq(0).appendTo(obj);
                }
                obj.css({"margin-top":0});
                if(_fadein){
                    obj.find("li").eq(0).animate({"opacity":0},Number(_delays));
                    obj.find("li").eq(itemsleg-1).css({"opacity":1});
                }
            });
          }else if(_direction=="bottom"){

            obj.animate({"margin-top":0},Number(_delays),function(){
                for(var i=0;i<_numberr;i++){
                    obj.find("li").eq(itemsleg-1).prependTo(obj);
                }
                obj.css("margin-top",-_numberr*itemsH);
                if(_fadein){
                    obj.find("li").eq(0).animate({"opacity":1},Number(_delays));
                    obj.find("li").eq(itemsleg-1).css({"opacity":0});
                }
            });
           }
        }
        $this.hover(function(){
         if(_enterStop){
             clearInterval(_time);
         }
       },function(){
            _time=  setInterval(scroll,_scrolling);
        }).trigger('mouseleave');
    }
})(jQuery);