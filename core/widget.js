define(['base','FFF'], function(Base,FFF) {


	function Widget(){
		Base.apply(this,arguments);
	}

	//interface must be realized
	Widget.interface = ['initilize','renderUI','bindUI','syncUI'];

	Widget.prototype.interface = function(){
    	return this;
	}

	Widget.prototype.render = function(){
		console.log(123)
    	return this;
	}

	Widget.prototype.destory = function(){
    	return this;
	}

	Widget.prototype.initAttr = function(attr){
		return this;
	}

	//attr getter
	Widget.prototype.getAttr = function(attrName){
		return this;
	}

	//attr setter
	Widget.prototype.setAttr = function(obj){
		return this;
	}

	Widget.ATTRS = {
		boundingBox:{
			value:'boundingBox'
		}
	}

	return FFF.core.extend(Widget,Base);

});