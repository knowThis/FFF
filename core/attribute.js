/**
 * Attribute处理类
 * 这里暂时放入Base
 */
define(['FFF'], function(FFF) {

    var tSet = FFF.core.tSet;

    function Attribute() {
        this.__initAttr();
    }

    Attribute.prototype.__initAttr = function() {
        var attrs = this.constructor.ATTRS || {},
            self = this;
        Object.keys(attrs).forEach(function(attr) {

            tSet(self, attr, attrs[attr].value);

        });

    }

    return Attribute;
});
