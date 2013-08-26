var Imp = (function() {
	var _interfaces = {};
	var _isProductionMode = false;

	this.setProductionMode = function() {
		_isProductionMode = true;
	};

	this.lements = function(interfaceName, object) {
		setTimeout(function() {
			validate(interfaceName, object, !_isProductionMode);
		},1);
	};

	this.define = function(name, object) {
		var jsInterface = new Imp.Interface(name);
		_interfaces[name] = jsInterface;
		object.method = function(/* ... */) {
			var stringArguments = [];
			for (var i = 0; i < arguments.length; i++) {
				stringArguments.push(arguments[i]);
			}
			return jsInterface.addMethod(stringArguments.shift(), stringArguments);
		};
	};

	this.doesImplement = function(interfaceName, object) {
		return validate(interfaceName, object);
	};

	var validate = function(interfaceName, object, throwErrors) {
		if (!_interfaces.hasOwnProperty(interfaceName)) {
			if (throwErrors) {
				throw "No interface exists by the name of " + interfaceName + ".";
			}
			return false;
		}

		var jsInterface = _interfaces[interfaceName];

		var allMethodsObject = jsInterface.methods;
		var methodsNotFound = [];
		for (var key in allMethodsObject) {
			methodsNotFound.push(key);
		}

		for (var key in object) {
			if (!jsInterface.methods[key]) {
				continue;
			}
			
			paramNames = Imp.utils.getParamNames(object[key]);
			
			if (!Imp.utils.compareArrays(jsInterface.methods[key].arguments, paramNames)) {
				if (throwErrors) {
					throw "Incompatible method signature for method " + key + " on interface " + interfaceName + ".";
				}
				return false;
			}

			for (var i = 0; i < methodsNotFound.length; i++) {
				if (methodsNotFound[i] === key) {
					methodsNotFound.splice(i,1);
				}
			}
			
		}

		if (methodsNotFound.length > 0) {
			for (var i = 0; i < methodsNotFound.length; i++) {
				if (throwErrors) {
					throw "Method " + methodsNotFound[i] + " must be defined in order to implement interface " + interfaceName + ".";
				}
				return false;
			}
		}

		return true;
	};

	return this;
})();