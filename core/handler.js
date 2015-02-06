/**
 * Handler 类
 * 暂时放在Base文件中
 */
define(['FFF'], function(FFF) {

    function Handler() {
        this.__initAttrHandler();
    }

    /**
     * 注册默认的valueChange事件
     * @return {null}
     */
    Handler.prototype.__initAttrHandler = function() {

        var attrs = this.constructor.ATTRS || {};

        Object.keys(attrs).forEach(function() {

        })

    }

    Handler.prototype.trigger = function() {

    }

    Handler.prototype.on = function(evt, handler) {

    }

    return Handler
});
