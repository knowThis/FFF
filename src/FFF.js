define(['FFFBase/base', 'FFFBase/language', 'FFFBase/widget','zepto'], function (base, language, widget,$) {
   var packageInfo =  require('../package.json');

    var L = language.language;
    var Base = base.Base;
    var Widget = widget.Widget;


    var VERSION = packageInfo.version;

    function FFF() {
        this.version = VERSION;
        Base.apply(this, arguments);
    }

    FFF.STATICS = {
        Language: L,
        Base: Base,
        Widget: Widget
    };


    //让FFF拥有Language类的static方法
    L.mix(FFF.prototype, L);

    L.extend(FFF, Base, FFF.STATICS);

    var F = new FFF();

    window.FFF = F;
    window.$ = $;
    window.Zepto = $;


    return {
        FFF: F
    };

});