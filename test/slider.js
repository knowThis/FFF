define(['FFF','widget'], function(FFF,widget) {

    function WidgetA() {
        widget.apply(this, arguments);
    }


    WidgetA.prototype.initialize = function() {

    };
    WidgetA.prototype.renderUI = function() {
        var me = this;
        //TODO 此处需要任彬写的mc来处理
        //或者改造handler中的event处理模式
        me.on('loadData',function(){
            console.log(new Date().getTime());
        })
    };
    WidgetA.prototype.bindUI = function() {

    };

    WidgetA.prototype.syncUI = function() {

    };
    WidgetA.prototype.destructor = function() {

    };



    return FFF.core.extend(WidgetA, widget);

});