define(['FFF','widget'], function(FFF,widget) {

    function WidgetA() {
    }


    WidgetA.prototype.initialize = function() {

    };
    WidgetA.prototype.renderUI = function() {
        var me = this;
        me.on('loadData',function(){
            console.log(arguments);
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
