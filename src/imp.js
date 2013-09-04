var Imp = (function() {
	var _isProductionMode = false;

	this.setProductionMode = function() {
		_isProductionMode = true;
	};

	this.lements = function(interfaceReference, implementation) {
		setTimeout(function() {
			validate(interfaceReference, implementation, !_isProductionMode);
		},1);
	};

	this.doesImplement = function(interfaceReference, object) {
		return validate(interfaceReference, object);
	};

	var validate = function(interfaceReference, implementation, throwErrors) {
		if (!interfaceReference || !interfaceReference.methods) {
			throw "Invalid interface declaration. See documentation.";
			return false;
		}

		var errors = [];

		for (var i = 0; i < interfaceReference.methods.length; i++) {
			var methodName = interfaceReference.methods[i].name;
			if (!implementation[methodName]) {
				errors.push("imp: Method " + methodName + " must be defined in order to implement this interface.")
				continue;
			}
			
			paramNames = Imp.utils.getParamNames(implementation[methodName]);
			
			var interfaceMethodParams = [];
			if (interfaceReference.methods[i].params) {
				interfaceMethodParams = interfaceReference.methods[i].params;
			}

			if (!Imp.utils.compareArrays(interfaceMethodParams, paramNames)) {
				errors.push("imp: Incompatible method signature for method " + methodName + ".")
				continue;
			}
		}

		if (errors.length > 0) {
			for (var i = 0; i < errors.length; i++) {
				if (throwErrors) {
					throw errors[i];
				}
				return false;
			}
		}

		return true;
	};

	return this;
})();