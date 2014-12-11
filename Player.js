var Player = {
    items: [],
    name: "",
    major: "",
    pickup: function(item){
            return this.items.push(item); //checking for item in room, need to remove item from  	                                     room, display message to user if not in room
    },
    drop: function(item){
          if(this.items.indexOf(item) > 0) { //checking for item in room
             items.splice(indexOf(item), 1) //remove it from array, add back to room
          }
    },
    goto: function(location){
             // if(locName.map >= 0){ //check if locationName exists in map
                  // if(map.connec[0][i] === 1) {// if so, check if it is connected to currLoc
                       // currLoc = locName.map[i] //then, set currLoc to the new location or check for 						     prerequisites
                        // if prerequisites are not met, display message
                  // }else{
                        // display message if not connected
             // }else{
                  // display message if location does not exist
    }
    
}
