/**
 * Handler 类
 * 暂时放在Base文件中
 */
define(['FFF'], function(FFF) {

    function Handler() {
        this.__events = {};
    }

    /**
     * 内部方法
     * 触发Attr变化的Event
     */
    Handler.prototype.__fireAttrEvent = function(evt, newValue, oldValue) {
        this.trigger(evt, {
            value: newValue,
            preValue: oldValue
        });
    }

    /**
     * 触发注册过的事件，暂时不抛出空事件的错误
     * @param  {String} evt 事件名
     */
    Handler.prototype.trigger = function(evt) {
        if (this.__events.hasOwnProperty(evt)) {
            if (arguments.length > 1) {
                this.__events[evt](arguments[1]);
            } else {
                this.__events[evt]();
            }
        }
    }

    /**
     * 注册事件，暂不支持多个handler绑定在一个事件上
     * @param  {String} evt     事件名
     * @param  {Function} handler 事件处理函数
     */
    Handler.prototype.on = function(evt, handler) {
        this.__events[evt] = handler;
    }

    /**
     * 注销事件
     * @param  {String} evt 事件名
     */
    Handler.prototype.off = function(evt) {
    	if (this.__events.hasOwnProperty(evt)) {
    		delete(this.__events[evt]);
    	}
    }

    return Handler
});
