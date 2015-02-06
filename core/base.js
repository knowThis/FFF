define(['FFF','attribute','handler'], function(FFF,Attribute,Handler) {

    /**
     * FFF基础类,所有类都讲继承Base
     */
    function Base() {
        Attribute.apply(this, arguments);
        Handler.apply(this, arguments);
    }

    FFF.core.mix(Base.prototype, Attribute.prototype, false);
    FFF.core.mix(Base.prototype, Handler.prototype, false);


    return Base;

})
