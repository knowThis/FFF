define(['FFF'],function(FFF){

	/**
	 * Attribute处理类
	 * 这里暂时放入Base
	 */
	
	function AttriBute(){
		this.__initAttr();
	}

	AttriBute.prototype.__initAttr = function(attrs,values){
		var attrs = this.constructor.ATTRS || {},
			self = this;
		// FFF.core.tSet(this,'name');
		// test code
		Object.keys(attrs).forEach(function(o){
			FFF.core.tSet(self,o);
			if (typeof attrs[o] === 'object' && attrs[o].hasOwnProperty('value')) {
				self['set'+o.charAt(0).toUpperCase()+o.substr(1)](attrs[o].value);
			};
		});
	}


	/**
	 * Handler 类
	 * 暂时放在Base文件中
	 */
	 function Handler(){

	 }

	 Handler.prototype.on = function(evt,handler){
	 	console.log(evt);
	 }





	/**
	 * FFF基础类,所有类都讲继承Base
	 */
	function Base(){
		AttriBute.apply(this,arguments);
		Handler.apply(this,arguments);
	}

	FFF.core.mix(Base.prototype,AttriBute.prototype,false);
	FFF.core.mix(Base.prototype,Handler.prototype,false);
	

	return Base;

})