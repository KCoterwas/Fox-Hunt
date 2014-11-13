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



var interpret = function(str){
    console.log('calling interpret');
    var Obj = {}
    //error "cannot read property 'trim' of undefined"
    str = str.trim();
    var words = str.split(" ");
    Obj.action = words.shift();
    Obj.object = words.join();
    return Obj;
}

var execute = function(command){
    console.log('calling execute');
    Player[command.action](command.object);
}

var report = function(){
    console.log('calling report');
    for(i in Player.items){
        return document.querySelector("#inventory > ul");
    }
}

var gameStep = function(){
    var input = this.value;
    var object = interpret(input);
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

