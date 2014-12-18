var errorMessage = function(str){
    var message = document.querySelector("#scene > label");
	message.textContent = str;
}
var Player = {
    items: [],
    name: "",
    major: "",
	location: map.loc[0],
    goto: function(location){
              if(indexOfLoc(location) >= 0){ //check if locationName exists in map
                   if(isConnected(this.location.name, location)) {// if so, check if it is connected to currLoc
                        this.location = map.loc[indexOfLoc(location)]; //then, set currLoc to the new location
                   }else{
                        errorMessage("You cannot travel to " + location + " from here.")
                   }
			  }else{
                  errorMessage("You cannot get off campus without a car.")
    }
    
}
}