define(['base'], function(Base) {


	function Widget(){
		Base.apply(this,arguments);
	}

	//interface must be realized
	Widget.interface = ['initilize','renderUI','bindUI','syncUI'];

	Widget.prototype.interface = function(){

	}

	Widget.prototype.render = function(){
		console.log(this)
	}

	Widget.prototype.destory = function(){

	}

	Widget.prototype.initAttr = function(attr){
	}

	//attr getter
	Widget.prototype.getAttr = function(attrName){
	}

	//attr setter
	Widget.prototype.setAttr = function(obj){
	}

	Widget.attr = {
		"boundingBox":undefined
	}

	return Widget;

});