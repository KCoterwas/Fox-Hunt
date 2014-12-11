var majorList = ["communication", "computer science", "english"];
function gameIntro() {
    inputBox = document.querySelector("input");
    var nameListener = function(event) {
         var majorListener = function(event) {
              if (event.keyCode === 13) {
                   if (majorList.indexOf(this.value) === -1){
                        var majorError = document.querySelector("#descrip");
                        majorError.textContent = this.value + " is not an offered major. " + 							 majorError.textContent;
                        return -1;
                        inputBox.value = "";
                   }
                   if (this.value != -1){
                        setMajor(this.value);
                        inputBox.removeEventListener("keyup", majorListener);
                        gameStart();
                   }
              }
              
         }
         if (event.keyCode === 13) {
              setName(this.value);
	      var majorQues = document.querySelector("#descrip");
              clearContent(majorQues);
              inputBox.value = "";
              inputBox.removeEventListener("keyup", nameListener);
              inputBox.addEventListener ("keyup", majorListener);
              majorQues.textContent = "Please choose a major. You may choose from Communication, 					       Computer Science, or English."
         }
    
    };
    inputBox.addEventListener ("keyup", nameListener);
   
}

function setName(input){
    Player.name = input;
    console.log(Player.name);
}

function setMajor(input){
    Player.major = input;
    console.log(Player.major);
}

function clearContent(node){
    while(node.hasChildNodes()){
         node.removeChild(node.firstChild);
    }
}

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
    var currLoc = document.querySelector("#descrip");
    clearContent(currLoc);
    currLoc.textContent = Player.location;
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

var inputBox;

var gameStart = function(){
    inputBox.value = "";
    var startLoc = document.querySelector("#descrip");
    clearContent(startLoc);
    startLoc.textContent = "You arrive at Marist College for your move in day as a freshman. Your 				   parents have just said their goodbyes and you are now standing outside your 				   room observing all of your new neighbors. A girl approaches you. 'Hi!' she  				   says, 'My name is Michaela. What's yours?' You have a weird feeling about 				   this girl but you respond, 'My name is " + Player.name + ".'";
    inputBox.addEventListener("keyup", function(event){
         if(event.keyCode === 13){
              gameStep(this.value);
         }
    })
}

window.onload = gameIntro;

