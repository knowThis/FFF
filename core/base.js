define(['language','attribute','eventEmitter'], function(L,Attribute,EventEmitter) {

    /**
     * FFF基础类,所有类都讲继承Base
     */
    function Base() {
        Attribute.apply(this, arguments);
        EventEmitter.apply(this, arguments);
    }

    L.core.mix(Base.prototype, Attribute.prototype, false);
    L.core.mix(Base.prototype, EventEmitter.prototype, false);


    return Base;

});
