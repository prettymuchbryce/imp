Imp.utils = (function() {
	this.getParamNames = function(func) {
		var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
		var fnStr = func.toString().replace(STRIP_COMMENTS, '');
		var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(/([^\s,]+)/g);
		if (result === null) {
			result = [];
		}
		return result;
	};

	this.compareArrays = function (array1, array2) {
	    // if the other array is a falsy value, return
	    if (!array2)
	        return false;

	    // compare lengths - can save a lot of time
	    if (array1.length != array2.length)
	        return false;

	    for (var i = 0; i < array1.length; i++) {
	        // Check if we have nested arrays
	        if (array1[i] instanceof Array && array2[i] instanceof Array) {
	            // recurse into the nested arrays
	            if (!array1[i].compare(array2[i]))
	                return false;
	        }
	        else if (array1[i] != array2[i]) {
	            // Warning - two different object instances will never be equal: {x:20} != {x:20}
	            return false;
	        }
	    }
	    return true;
	};

	return this;
})();