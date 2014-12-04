var Player = {
    items: [],
    pickup: function(item){
            return this.items.push(item); //checking for item in room, need to remove item from  	                                     room, display message to user if not in room
    },
    drop: function(item){
          if(this.items.indexOf(item) > 0) { //checking for item in room
             items.splice(indexOf(item), 1) //remove it from array, add back to room
          }
     }
    /*goto: = function(location){
              check if locationName exists in map
                   if so, check if it is connected to currLoc
                        then, set currLoc to the new location or check for prerequisites
                             if prerequisites are not met, display message
                        display message if not connected
                   display message if location does not exist
    */
}

function clearContent(node){
    while(node.hasChildNodes()){
         node.removeChild(node.firstChild);
    }
}

/* Old report function
var report = function(){
    console.log('calling report');
    var ul = document.querySelector("#inventory > ul");
    for(i in Player.items){
        var line = document.createElement("li");
        line.textContent = Player.items[i];
        ul.appendChild(line);
    }
}
*/

var displayActions = function() {
     var field, action, actionList;

    actionList = document.querySelector("#help > ul");
    clearContent(actionList);

    for (field in Player) {
        if (Player[field] instanceof Function) {
            action = document.createElement("li");
            action.textContent = field;
            actionList.appendChild(action);
        }
    }
}

var displayInventory = function() {
    var i, item, inventory;

    inventory = document.querySelector("#inventory > ul");
    clearContent(inventory);

    for (i in Player.items) {
        item = document.createElement("li");
        item.textContent = Player.items[i];
        inventory.appendChild(item);
    }
}

var displayScene = function() {
    //Change scene after input: possible repeat of scene if there are more actions (Player.location?)
}

var interpret = function(inString){
    console.log('calling interpret');
    var Obj = {};
    var trimString = inString.trim();
    var lowerString = trimString.toLowerCase();
    var words = lowerString.split(" ");
    Obj.action = words.shift();
    Obj.object = words.join();
    return Obj;
}

var execute = function(command){
    console.log('calling execute');
    Player[command.action](command.object);
}

var report = function() {
	displayActions();
	displayInventory();
	displayScene();
}

var gameStep = function(input){
    var cmd = interpret(input);
	var result = execute(cmd);
	report(result);
}

var gameStart = function(){
    var inputBox = document.querySelector("input");
    inputBox.addEventListener("keyup", function(event){
            if(event.keyCode === 13){
                    gameStep(this.value);
            }
    })
}

window.onload = gameStart;

