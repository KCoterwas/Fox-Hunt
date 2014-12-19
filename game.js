var majorList = ["communication", "computer science", "english"];

function gameIntro() {
    inputBox = document.querySelector("input");
    var nameListener = function(event) {
        var majorListener = function(event) {
            var convoListener = function(event) {
                var answer = document.querySelector("#descrip");
                if (event.keyCode === 13) {
                    clearContent(answer);
                    var question = this.value.toLowerCase();
                    this.value = "";
                    if (question === "tell joke") {
                        answer.textContent = "You make a clever comment and Michaela laughs. This is no ordinary laugh, however, this laugh sounds like a witch's cackle echoing through the hall. You find this strange and you nervously laugh along. What do you ask next?";
                    } else if (question === "ask major") {
                        if (Player.major.toLowerCase() === "communication") {
                            answer.textContent = "Before you can get a word out to ask Michaela's major, she blurts 'So what's you major?' You say that you're a communications major and her eyes widen. 'NO WAY! I'm a communications major too! This is so great! We can take classes together, study together...' She continues talking and you feel like you should change the subject. What do you ask next?";
                        } else
                            answer.textContent = "Before you can get a word out to ask Michaela's major, she blurts 'So what's you major?' You tell her that you are a " + Player.major + " major. 'I mean that's cool I guess. I'm a communications major by the way. You feel a bit awkward and you want to change the subject. What do you ask next?";
                    } else if (question === "ask hometown") {
                        answer.textContent = "'So where are you from?' You ask. 'Oh I'm from the L.A. area. I love beaches and partying, so if you want to find me on the weekend, or really any time of the week, I'll be at one of those things.' You nod your head and decide to keep the conversation going. What do you ask next?";
                    } else if (question === "ask about parties") {
                        answer.textContent = "'You asked the right girl about parties. I hear the frat house has something tonight. We just have to get invited by a frat guy. Hopefully a cute frat guy.' What do you ask next?";
                    } else if (question === "invite to lunch") {
                        inputBox.removeEventListener("keyup", convoListener);
                        clearContent(document.querySelector("#help > ul"));
                        gameStart();
                    } else
                        answer.textContent = "That is not a valid action.";

                }
            }
            if (event.keyCode === 13) {
                if (majorList.indexOf(this.value.toLowerCase()) === -1) {
                    var majorError = document.querySelector("#descrip");
                    majorError.textContent = this.value + " is not an offered major. " + majorError.textContent;
                    inputBox.value = "";
                    return -1;
                }
                if (this.value != -1) {
                    setMajor(this.value);
                    inputBox.removeEventListener("keyup", majorListener);
                    var startLoc = document.querySelector("#descrip");
                    inputBox.value = "";
                    startLoc.textContent = "You arrive at Marist College for your move in day as a freshman. Your parents have just said their goodbyes and you are now standing outside your 				   room observing all of your new neighbors. A girl approaches you. 'Hi!' she  				   says, 'My name is Michaela. What's yours?' You have a weird feeling about 				   this girl but you respond, 'My name is " + Player.name + ".'";
                    addAction("tell joke");
                    addAction("ask major");
                    addAction("ask hometown");
                    addAction("ask about parties");
                    addAction("invite to lunch");
                    inputBox.addEventListener("keyup", convoListener);
                }
            }

        }

        if (event.keyCode === 13) {
            setName(this.value);
            var majorQues = document.querySelector("#descrip");
            clearContent(majorQues);
            inputBox.value = "";
            inputBox.removeEventListener("keyup", nameListener);
            inputBox.addEventListener("keyup", majorListener);
            majorQues.textContent = "Please choose a major. You may choose from Communication, Computer Science, or English."
        }

    };
    inputBox.addEventListener("keyup", nameListener);

}

function setName(input) {
    Player.name = input;
}

function setMajor(input) {
    Player.major = input;
}

function clearContent(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

function addAction(str) {
    var convoActions = document.querySelector("#help > ul");
    var li = document.createElement("li");
    li.textContent = str;
    convoActions.appendChild(li);
}

var displayScene = function() {
    var currLoc = document.querySelector("#descrip");
    clearContent(currLoc);
    currLoc.textContent = Player.location.description;
}

var interpret = function(inString) {
    console.log('calling interpret');
    var Obj = {};
    var trimString = inString.trim();
    var lowerString = trimString.toLowerCase();
    var words = lowerString.split(" ");
    Obj.action = words.shift();
    Obj.object = words.join(" ");
    return Obj;
}

var execute = function(command) {
    console.log('calling execute');
    Player[command.action](command.object);
}

var report = function() {
    displayScene();
}

var gameStep = function(input) {
    var cmd = interpret(input);
    var result = execute(cmd);
    report(result);
}

var inputBox;

var gameStart = function() {
    inputBox.value = "";
    displayScene();
    if (Player.location.name === "dining hall") {
        inputBox = document.querySelector("input");
        var lunchListenter = function(event) {
            var answer = document.querySelector("#descrip");
            if (event.keyCode === 13) {
                clearContent(answer);
                var question = this.value.toLowerCase();
                this.value = "";
				var partyInvite = false;
				var askClass = false;
                if (badLunch && question === "ask opinion on food") {
                    answer.textContent = "'Isn't the food awful here?' Michaela says. 'I think it's just today. I'm sure it'll be better on other days.' You say. 'Oh stop being so optimistic, " + Player.name + ". It's cafeteria food. It's nothing like my food back home made by my personal chef. I mean perks of being rule... rich!' You caught her slip-up and wonder what she was going to say, but decide to not ask about it now. What do you do now?";
                } else if (question === "make small talk") {
                    partyInvite = true;
                    answer.textContent = "'Sooo... Why did you pick Marist?' You ask. 'My parents thought this college was best suited for my ambitious goals of taking control of people...through media, of course.' She says. You're caught a little off guard by this answer, and you don't know what to say, so you stare at your food and take some bites. Just then, a frat boy comes over, staring at you, but Michaela says, 'Oh hey! Any cool parties tonight?' 'In fact, there is. I was going to invite your friend here to come.' He says. 'Cool! We'll be there!' Michaela says for you. You're a bit insulted by her answering for you, but glad that she accepted. What do you do now? ";
                } else if (question === "ask about classes") {
				    askClass = true;
                    answer.textContent = "'So what classes were you put in?' Michaela asks, almost as if she read your mind. 'Um... well I have writing for college... Oh no!' You just realized that your class starts in five minutes. There's no way you'll make it on time. Do you want to give up on class and go to your room until the party, or run to class?";
                    addAction("go to class");
                } else if (question === "go to class") {
                    inputBox.removeEventListener("keyup", lunchListenter);
                    clearContent(document.querySelector("#help > ul"));
                    Player.moveto("class");
					inputBox.addEventListener("keyup", function(event) {
                       if (event.keyCode === 13) {
                           gameStep(this.value);
                       }
					})
                } else if (question === "go to dorm room") {
                    inputBox.removeEventListener("keyup", lunchListenter);
                    clearContent(document.querySelector("#help > ul"));
					if (askClass === true){
					   getLocation("dorm room").description = "You have no desire to go to class today. Thankfully it's syllabus week so you didn't miss much. How will you pass the time until the party?";
					}
                    Player.moveto("dorm room");
					inputBox.addEventListener("keyup", function(event) {
					   if (event.keyCode === 13) {
                           gameStep(this.value);
                       }
                    })
                } else
                    answer.textContent = "That is not a valid action.";
            }
        }
        inputBox.addEventListener("keyup", lunchListenter);
        if (badLunch) {
            addAction("ask opinion on food");
        }
        addAction("make small talk");
        addAction("ask about classes");
        addAction("go to dorm room");
    }
	if (Player.location.name === "class") {
        inputBox = document.querySelector("input");
        var classListenter = function(event) {
            var result = document.querySelector("#descrip");
            if (event.keyCode === 13) {
                clearContent(result);
                var action = this.value.toLowerCase();
                this.value = "";
                if (action === "a") {
                    result.textContent = "a";
                } else if (action === "b") {
                    result.textContent = "b";
                } else
                    answer.textContent = "That is not a valid action.";
            }
        }
        inputBox.addEventListener("keyup", classListenter);
        addAction("a");
        addAction("b");
    }
}

window.onload = gameIntro;

