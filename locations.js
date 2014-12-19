function Location(name, descrip) {
    this.name = name;
    this.description = descrip;
    this.items = [];
}

var locations = [];

var isConnected = function(from, to) {
    var fromIndex = indexOfLoc(from);
    var toIndex = indexOfLoc(to);
    if (map.connec[fromIndex][toIndex] === 1) {
        return true;
    } else {
        return false;
    }
}

var indexOfLoc = function(name) {
    var result = -1;
    for (var i = 0; i < map.loc.length; i++) {
        if (map.loc[i].name === name) {
            result = i;
        }
    }
    return result;
}

var getLocation = function(name) {
   var index = indexOfLoc(name);
   return map.loc[index];
}

if (Math.random() > 0.51) {
    var badLunch = false;
    var inHall = new Location("dining hall", "'Cool. Let's go to lunch together tomorrow!' She says. You arrive in the dining hall the next day to find a wide variety of food to choose from. You grab an awesome-looking taco with some delicious sugar cookies for dessert and sit down with Michaela. What do you say to her?");
} else {
    var badLunch = true;
    var inHall = new Location("dining hall", "'Cool. Let's go to lunch together tomorrow!' She says. You arrive in the dining hall the next day to find almost no good food. You grab a soggy-looking salad and watered-down iced tea and sit down with Michaela. What do you say to her?");
}
locations.push(inHall);

if(Math.random() > 0.8) {
   var onTime = true;
   var inClass = new Location("class", "You leave Michaela at the dining hall and rush to class. You miraculously made it on time. You sit down in class and begin to listen to the droning lecture. What will you do?");
} else {
   var onTime = false;
   var inClass = new Location("class", "You leave Michaela at the dining hall and make your way to class. You come in late and everyone is staring at you. You sit down in the back of the class and begin to listen to the droning lecture. What will you do?");
}
locations.push(inClass);

var inHouse = new Location("frat house", "You arrive at the frat house with Michaela and the party is in full swing. You see the guy who invited you to the party earlier. What will you do?");
locations.push(inHouse);

var inClub = new Location("club", "You enter a noisy and dark club with Michaela and several people are already very tipsy. Michaela goes off for a while and you dance by yourself. She comes back and offers you a drink. Do you take it?");
locations.push(inClub);

var inLibrary = new Location("library", "You enter the quiet library and sit down at a table. Michaela sits down next to you and plays music very loudly from her headphones. She begins to dance widly in her seat. She is getting looks from everyone. What will you do?");
locations.push(inLibrary);

var inRoom = new Location("dorm room", "You go back to your dorm and sit at your desk. You look at your schedule for the day and you realized you missed your first class. 'Crap.' You say under your breath. Thankfully it's syllabus week so you didn't miss much. How will you pass the time until the party?");
locations.push(inRoom);

var inMRoom = new Location("michaela's dorm room", "You finally get to see Michaela's room. It's a complete mess with dirt and clothes everywhere. It smells like dirty laundry and cans of lavender Febreeze. Michaela sits on top of clothes on her bed and invites you to sit down next to her. What do you do?");
locations.push(inMRoom);

var inBed = new Location("bed", "You fall asleep and begin to dream. You see images of Michaela laughing and then transforming into a fox. Then you see people from around campus turning into foxes and Michaela, as a fox, sitting on a throne above them all. You wake up the next morning in extreme confusion. You hear a knock at the door. It's Michaela and she's wearing a very revealing Marist Red Foxes shirt. What do you say?");
locations.push(inBed);

var connections = [
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0]
];

var map = {
    loc: locations,
    connec: connections,
    getLocNumber: function(locName) {
        var locNum = -1;
        for (i in this.locations) {
            if (locName === this.locations[i].name) {
                locNum = i;
                break;
            }
        }
        return locNum;
    }
}