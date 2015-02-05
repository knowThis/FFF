define([], function() {

    /*
	F -> the First store
	F -> Fast
	F -> Front-end
	 */
    var FFF = {};

    FFF.core = {
        extend: function(subc, superc) {
            if (!superc || !subc) {
                throw new Error("extend failed, please check that all dependencies are included!");
            }

            //extend
            var sp = Object.create(superc.prototype);
            var rp = subc.prototype;

            //mix subc prototype
            Object.keys(rp).forEach(function(o) {
                sp[o] = rp[o];
            })

            subc.prototype = sp;
            subc.prototype.constructor = subc;
            subc.superclass = sp;

            return subc;
        },
        tSet : function(obj, key) {
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

            var cName = key.charAt(0).toUpperCase() + key.substr(1);
            var setter = 'set' + cName;
            var getter = 'get' + cName;
            var delter = 'del' + cName;

            var cacheVal = '';

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
        }
    }

    return FFF;

});
