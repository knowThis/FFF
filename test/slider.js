define(['language','widget','messageCenter'], function(language,widget,mc) {

    function Slider() {
        widget.apply(this, arguments);
    }


    Slider.prototype.initialize = function() {
    };

    Slider.prototype.renderUI = function() {
        var me = this;


        mc.on(me,'hasData',function(source,data){
            console.log(source.getName()+' is '+data.isfire);
        });
    };
    Slider.prototype.bindUI = function() {

    };

    Slider.prototype.syncUI = function() {

    };
    Slider.prototype.destructor = function() {

    };

    Slider.ATTRS = {
        name:{
            value:"foo"
        },
        title:{
            value:"bar"
        },
        id:{
            value:"123"
        }
    }


    return language.core.extend(Slider, widget);

});
