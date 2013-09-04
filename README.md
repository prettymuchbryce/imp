# imp.js  
> Interfaces in JavaScript.

#### About 

Interfaces are a common OOP tool in languages like Java. Imp offers a solution for using interfacing in Javascript. Imp checks method names, and parameter names. Imp throws runtime errors if your classes fail to properly implement their interfaces. 

#### Defining an interface

	var IAnimal = 
	{
  		"methods": [ 
    		{ "name" : "makeSound", "params": ["sound"] },
    		{ "name" : "isMammal" },
    		{ "name" : "isDomestic" }
  		]
	}
    
#### Ensuring a class implements this interface

	var Dog = function() {
 		Imp.lements(IAnimal, this);
				
  		this.makeSound = function(sound) {
    			console.log("Woof!" + sound);
  		};
  
  		this.isMammal = function() {
    			return true;
  		};

  		this.isDomestic = function() {
    			return true;
  		}
	};
    
#### API Recap

`Imp.lements(interfaceReference, implementation);`

`Imp.doesImplement(interfaceReference, implementation);`

`Imp.setProductionMode(); //Remove interface enforcement and console errors.`

## Want to learn more?

_Find the minified file in the bin directory._

**See example.html for a more robust example**
