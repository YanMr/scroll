/*
 主题名称: 滚动效果
 描述：滚动插件
 作者: Ming
 博客：www.divjs.cn
 */
(function ($) {
    $.fn.easysroll= function(options) {
     var parameter= {
            direction: "left",
            numberr: "1",
            delays:"1000",
            scrolling: "1000",
            fadein: false,
            enterStop:true
         };
        var ops = $.extend(parameter,options);
        var $this=$(this);
        var _this=this;
        var _time=null;
        var obj=_this.find("[type='box']");
        var items=obj.find("li");
        var itemsleg=items.length;
        var itemsW=items.outerWidth(true);
        var itemsH=items.outerHeight(true);
        var _direction=ops.direction;
        var _numberr =ops.numberr;
        var _delays=ops.delays;
        var _scrolling =ops.scrolling;
        var _fadein=ops.fadein;
        var _enterStop=ops.enterStop;
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