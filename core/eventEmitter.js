/**
 * Handler 类
 * 暂时放在Base文件中
 */
define([], function() {

    function EventEmitter() {
        this.__events__ = {};
    }

    /**
     * 内部方法
     * 触发Attr变化的Event
     */
    EventEmitter.prototype.__fireAttrEvent = function(evt, newValue, oldValue) {
        this.trigger(evt, {
            value: newValue,
            preValue: oldValue
        });
    };

    /**
     * 触发注册过的事件，暂时不抛出空事件的错误
     * @param  {String} evt 事件名
     * @return {Object} 实例对象
     */
    EventEmitter.prototype.trigger = function (evt) {
        if (this.__events__.hasOwnProperty(evt)) {
            var evtVal = this.__events__[evt];
            if (arguments.length > 1) {
                evtVal.handler.apply(evtVal.scope, arguments[1]);
            } else {
                evtVal.handler.apply(evtVal.scope, []);
            }
        }
        return this;
    };

    /**
     * 注册事件，暂不支持多个event绑定在一个事件上
     * @param  {String} evt     事件名
     * @param  {Function} event 事件处理函数
     * @return {Object} 实例对象
     * TODO:是否需要多事件绑定
     */
    EventEmitter.prototype.on = function(evt, handler,scope) {
        this.__events__[evt] = {
            handler: handler,
            scope: scope || this
        };
        return this;
    };

    /**
     * 注销事件
     * @param  {String} evt 事件名
     * @return {Object} 实例对象
     */
    EventEmitter.prototype.off = function(evt) {
    	if (this.__events__.hasOwnProperty(evt)) {
    		delete this.__events__[evt];
    	}
    	return this;
    };

    /**
     * 注销所有事件
     * @return {Object} 实例对象
     */
    EventEmitter.prototype.offAll = function(){
    	this.__events__ = {};
    	return this;
    };

    return EventEmitter;
});
