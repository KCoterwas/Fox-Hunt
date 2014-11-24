var Player = {
    items: [],
    pickup: function(item){
            return this.items.push(item);
    },
    drop: function(item){
          if(this.items.indexOf(item) > 0) {
             items.splice(indexOf(item), 1)
          }else{
             return false;
          }
     }
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
    var ul = document.querySelector("#help > ul");
    /* Need to make action
    for (i in Player.action){
         var line = document.createElement("li");
         line.textContent = Player.action[i];
         ul.appendChild(line);
    */    
}

var displayInventory = function() {
    var ul = document.querySelector("#inventory > ul");
    for(i in Player.items){
        var line = document.createElement("li");
        line.textContent = Player.items[i];
        ul.appendChild(line);
}

var displayScene = function() {
    //Change scene after input: possible repeat of scene if there are more actions (Player.location?)
}

var report = function() {
	displayActions();
	displayInventory();
	displayScene();
}

var gameStep = function(){
    var inputBox = document.querySelector("input");
    var object = interpret(inputBox.value);
    execute(object);
    report();
}

var gameStart = function(){
    var inputBox = document.querySelector("input");
    inputBox.addEventListener("keyup", function(event){
            if(event.keyCode === 13){
                    gameStep();
            }
    })
}

window.onload = gameStart;

