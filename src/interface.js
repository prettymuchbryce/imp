Imp.Interface = function(name) {
	this.name = name;
	this.methods = {};

	var Method = function(name) {
		this.arguments = [];
		this.name = name;

		this.params = function(/* ... */) {
			this.arguments = arguments;
		};
	};

	this.addMethod = function(name) {
		var method = new Method(name);
		if (this.methods[name]) {
			throw "Duplicate method definition of " + name + " in " + this.name;
			return;
		}
		this.methods[name] = method;
		return method;
	};
};