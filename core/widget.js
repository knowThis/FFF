define(['base', 'language'], function(Base, L) {

    function Widget() {
        Base.apply(this, arguments);
        initWidget.call(this);
    }

    /**
     * Interface
     * @return {[type]} [description]
     */
    Widget.prototype.initialize = function() {};
    Widget.prototype.renderUI = function() {};
    Widget.prototype.bindUI = function() {};
    Widget.prototype.syncUI = function() {};
    Widget.prototype.destructor = function() {};

    /**
     * 渲染方法
     * @param {Object} opt 渲染的参数
     * @return {Object} 对象本身
     */
    Widget.prototype.render = function(opt) {
        this.renderUI();
        this.bindUI();
        this.syncUI();
        return this;
    }

    Widget.prototype.destory = function() {
        return this;
    }


    Widget.ATTRS = {
        boundingBox: {
            value: 'widget'
        }
    }

    /**
     * 从父类开始调用所有子类的initialize方法
     * 这样initialize方法将成为所有控件的入口
     */
    function initWidget() {
        var initializers = [];
        var ctx = this;
        do {
            initializers.push(ctx.initialize);
            ctx = ctx.super || {};
        } while (ctx.constructor.prototype.hasOwnProperty('initialize'));
        for (var i = initializers.length - 1; i >= 0; i--) {
            initializers[i]();
        };
    }

    return L.core.extend(Widget, Base);

});
