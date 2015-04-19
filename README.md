# scroll滚动插件

支持上下左右，淡入淡出，滚动时间设置，动画时间设置，鼠标经过是否停止设置

#默认配置参数可修改
 $(".content").easysroll({
        //默认配置参数
        direction: "left", //滚动方向  left（向左）right（向右） top(向上) bottom(向下)  默认left
        numberr: "1", //每一次滚动数量  默认是1
        delays:"1000",//完成一次动画所需时间  默认是1000等于1秒
        scrolling: "1000",//每一次动画的时间间隔  默认是1000等于1秒
        fadein:false,//是否支持淡入或淡出 默认false
        enterStop:true  //鼠标移入是否暂停滚动  默认是true
 })

#如果有问题，请留下您的评论，我看到后会进行更新维护
