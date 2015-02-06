/**
 * Attribute处理类
 * 这里暂时放入Base
 */
define(['FFF'], function(FFF) {

    function Attribute() {
        this.__initAttr();
    }

    Attribute.prototype.__initAttr = function() {
        var attrs = this.constructor.ATTRS || {};
        tSet(this, attrs);
    }

    /**
     * 设置私有属性
     * @param  {Object} obj 目标Object
     * @param  {String} key 需要设置的属性名
     * @param  {AnyObject} value 需要设置的属性值
     * @return {null}
     */
    function tSet(obj, attrs) {

        var defineProperty = ('defineProperty' in Object) ? Object.defineProperty :
            function(object, name, descriptor) {
                if (!Object.prototype.__defineGetter__) {
                    return;
                }
                if (descriptor.get) {
                    object.__defineGetter__(name, descriptor.get);
                }

                if (descriptor.set) {
                    object.__defineSetter__(name, descriptor.set);
                }
            };

        Object.keys(attrs).forEach(function(key) {

            var cName = key.charAt(0).toUpperCase() + key.substr(1);
            var setter = 'set' + cName;
            var getter = 'get' + cName;
            var delter = 'del' + cName;

            var cacheVal = attrs[key].value || '';

            defineProperty(obj, key, {
                configurable: true,
                get: function() {
                    return cacheVal;
                },
                set: function(val) {
                    cacheVal = val;
                }
            });

            obj[setter] = function(val) {
                obj.__fireAttrEvent(key+'Change',val,obj[getter]());
                Object.getOwnPropertyDescriptor(obj, key).set(val);
            };

            obj[getter] = function() {
                var val = Object.getOwnPropertyDescriptor(obj, key).get();
                return val;
            };

            obj[delter] = function() {
                defineProperty(obj, key, {
                    enumerable: true,
                    configurable: true
                });
                delete obj[key];
                delete obj[setter];
                delete obj[getter];
                delete obj[delter];

            };
        });
    }

    return Attribute;
});
