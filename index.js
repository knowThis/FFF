/**
 * Created by knowthis on 2017/7/19.
 * auther website:http://zhouxianbao.cn
 */
var FFF = require('FFFBase/FFF');
require('./style/base.less');
// var out =  {
//     FFF:FFF
// };
console.log("FFF lib", FFF);
var F = FFF.FFF;
var a = new F({
    dom: '<div id="some"></div>',
    data: {
        name:''
    },
    init: function () {

    },
    renderUI: function () {

    },
    bindUI: function () {

    },
    syncUI:function () {

    }

});

function A() {
    F.apply(this,arguments)

}
A.ATTRS ={
    name:'1'
};
F.extend(A,F.base,{

})
