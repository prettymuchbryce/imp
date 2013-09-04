`        _                   _     
        (_)_ __ ___  _ __   (_)___ 
        | | '_ ` _ \| '_ \  | / __|
        | | | | | | | |_) | | \__ \
        |_|_| |_| |_| .__(_)/ |___/
                    |_|   |__/     
        Interfaces in JavaScript.`

Find the minified file in the bin directory.

#### About 

Interfaces are a common OOP tool in languages like Java. Imp offers a solution for using interfacing in Javascript. Imp checks method names, and parameter names. Imp throws runtime errors if your classes fail to properly implement their interfaces. 

#### Defining an interface

`var IAnimal = 
{
  "methods": [ 
    { "name" : "makeSound", "params": ["sound"] },
    { "name" : "isMammal" },
    { "name" : "isDomestic" }
  ]
}`
    
#### Ensuring a class implements this interface

`var Dog = function() {
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
};`
    
#### API Recap

`Imp.lements(interfaceReference, implementation);`

`Imp.doesImplement(interfaceReference, implementation);`

`Imp.setProductionMode(); //Remove interface enforcement and console errors.`
