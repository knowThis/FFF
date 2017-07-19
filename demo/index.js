/**
 * Created by benbentime on 2015/8/19.
 */
var FFF = require('../dist/FFF.zepto.0.1.2.min');
// var $ = require('zepto');
// console.log(som)
var F = FFF.FFF;
var Widget = F.Widget;

function Calculate() {
    Widget.apply(this, arguments)
}

Calculate.ATTRS = {
    boundingBox: {
        value: $('<div class="index_main"></div>')
    },
    temp: {
        value: '',
        changeFn: function (obj) {
            this.getBoundingBox().find(".index_show").html(obj.value || 0)
        }
    }
};
F.extend(Calculate, Widget, {
    initialize: function () {
    },

    bindUI: function () {
        var that = this;
        $(".item_1").on("click", function () {
            that.setTemp(that.getTemp() + "1");
            console.log(that.getTemp())
        });
        $(".item_2").on("click", function () {
            that.setTemp(that.getTemp() + "2");
            console.log(that.getTemp())
        });
        $(".item_3").on("click", function () {
            that.setTemp(that.getTemp() + "3");
            console.log(that.getTemp())
        });
        $(".item_4").on("click", function () {
            that.setTemp(that.getTemp() + "4");
            console.log(that.getTemp())
        });
        $(".item_5").on("click", function () {
            that.setTemp(that.getTemp() + "5");
            console.log(that.getTemp())
        });
        $(".item_6").on("click", function () {
            that.setTemp(that.getTemp() + "6");
            console.log(that.getTemp())
        });
        $(".item_7").on("click", function () {
            that.setTemp(that.getTemp() + "7");
            console.log(that.getTemp())
        });
        $(".item_8").on("click", function () {
            that.setTemp(that.getTemp() + "8");
            console.log(that.getTemp())
        });
        $(".item_9").on("click", function () {
            that.setTemp(that.getTemp() + "9");
            console.log(that.getTemp())
        });
        $(".item_0").on("click", function () {
            that.setTemp(that.getTemp() + "0");
            console.log(that.getTemp())
        });
        $(".item_add").on("click", function () {
            that.setTemp(that.getTemp() + "+");
            console.log(that.getTemp())
        });
        $(".item_reduce").on("click", function () {
            that.setTemp(that.getTemp() + "-");
            console.log(that.getTemp())
        });
        $(".item_divide").on("click", function () {
            that.setTemp(that.getTemp() + "/");
            console.log(that.getTemp())
        });
        $(".item_ride").on("click", function () {
            that.setTemp(that.getTemp() + "*");
            console.log(that.getTemp())
        });
        $(".item_AC").on("click", function () {
            that.setTemp("");
            console.log(that.getTemp())
        });
        $(".item_equal").on("click", function () {
            that.setTemp(eval(that.getTemp()));
            console.log(that.getTemp())
        });
    },
    renderUI: function () {
        var that = this;
        var box = that.getBoundingBox();
        var index_show = '<div class="index_show">0</div><div class="key_main"><div class="key_row"> ' +
            '<div class="key_item item_7">7</div> <div class="key_item item_8">8</div> <div class="key_item item_9">9</div> <div class="key_item key_operation item_divide">/</div> ' +
            '</div> <div class="key_row"> ' +
            '<div class="key_item item_4">4</div> <div class="key_item item_5">5</div> <div class="key_item item_6">6</div> <div class="key_item key_operation item_ride">*</div> ' +
            '</div> <div class="key_row"> ' +
            '<div class="key_item item_1">1</div> <div class="key_item item_2">2</div> <div class="key_item item_3">3</div> <div class="key_item key_operation item_reduce">-</div> ' +
            '</div> <div class="key_row"> <div class="key_item key_AC item_AC">AC</div> <div class="key_item item_0">0</div> <div class="key_item key_operation item_equal">=</div> <div class="key_item key_operation item_add">+</div> ' +
            '</div> </div>';
        box.append(index_show);

    }
});
var calculate = new Calculate();
calculate.render({
    container: $(".index_content"),
    type: 'append'
})



