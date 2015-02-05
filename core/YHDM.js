define(['widget'], function(Widget) {


    (function() {

        var FFF = window.FFF = {};

        YHDM.widget = {
            create: function(ClassName) {

                YHDM.core.extend(ClassName,Widget);

                var opt = {},
                    args = arguments,
                    interfaces = Widget.interface,
                    pAttr = Widget.attr,
                    attrs = ClassName.attr;

                //如果实例话需要参数那么将args[1]的值传入
                if (args.length > 1 && typeof args[1] === 'object') {
                    opt = args[1];
                };
                var obj = new ClassName(opt);

                //判断接口的实现
                for (var i = 0; i < interfaces.length; i++) {
                    if (typeof obj[interfaces[i]] !== 'function') {
                        throw new Error("Widget interfaces must be realized!");
                    };
                };

                //将widget的属性放入实例中
                if (ClassName.attr && typeof ClassName.attr === 'object') {
                    for(attr in pAttr){
                        attrs[attr] = pAttr[attr];
                    }
                	obj.initAttr(attrs);
                };

                return obj;
            }
        }

        YHDM.core = {
            extend: function(subc, superc) {
                if (!superc || !subc) {
                    throw new Error("extend failed, please check that all dependencies are included!");
                }
                var prototype = subc.prototype || {};
                var parentPrototype = Object.create(superc.prototype);
                for(o in parentPrototype){
                    prototype[o] = parentPrototype[o];
                }
                subc.prototype = prototype;
                subc.prototype.constructor = superc;
            },
            namespace:function(){
                
            }
        }

    })();


})
