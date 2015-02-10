define(['FFF','attribute','eventEmitter'], function(FFF,Attribute,EventEmitter) {

    /**
     * FFF基础类,所有类都讲继承Base
     */
    function Base() {
        Attribute.apply(this, arguments);
        EventEmitter.apply(this, arguments);
    }

    FFF.core.mix(Base.prototype, Attribute.prototype, false);
    FFF.core.mix(Base.prototype, EventEmitter.prototype, false);


    return Base;

});
