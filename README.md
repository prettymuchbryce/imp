# imp

> Interfaces in Javascript.

#### About 

Interfaces are a common OOP tool in languages like Java. Imp offers a solution for using interfacing in Javascript. Imp checks method names, and parameter names. Imp throws runtime errors if your classes fail to properly implement their interfaces. 
#### Defining an interface

    var IAnimal = (function() {
      Imp.define("IAnimal", this);
      method("makeSound").params("message");
      method("isMammal");
    })();
    
#### Ensuring a class implements this interface

    var Dog = function() {
      Imp.lements("IAnimal", this);
    				
      this.makeSound = function(message) {
        console.log("Woof!" + message);
      };
      
      this.isMammal = function() {
        return true;
      };
    };
    
#### Checking to see if an object implements an interface

    if (Imp.doesImplement("IAnimal", dog)) {
      console.log("Dog is an animal");
    } else {
      console.log("Dog is not an animal");
    }
    
#### API Recap

`Imp.define(interfaceName, interface);`

`Imp.lements(interfaceName, implementation);`

`Imp.doesImplement(interfaceName, implementation);`

`Imp.setProductionMode(); //Remove interface enforcement and console errors.`
