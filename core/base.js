define([],function(){

	function Base(){

	}

	//handler
	Base.prototype.on = function(event,handler){
		console.log(event)
	}

	// Base.prototype.
	

	return Base;

})