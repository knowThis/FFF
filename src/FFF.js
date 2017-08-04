/**
 * Created by knowthis on 2017/8/4.
 * auther website:http://zhouxianbao.cn
 */

define(['../package','./base'],function (packInfo,Base) {
    function FFF() {
        this.version = packInfo.version;
        console.log(arguments)
    }
    return {
        FFF: FFF
    }
});


