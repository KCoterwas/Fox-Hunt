function Location (name, descrip){
    this.name = name;
    this.description = descrip;
    this.items = [];
}

var locations = [];

var inHall = new Location("Dining Hall", "You arrive in the dining hall to find a wide variety of food to choose from. You grab a salad and sit down with Michaela. What do you say to her?");
locations.push(inHall);

var inClass = new Location("Class", "You sit down in class and begin to listen to the droning lecture. What will you do?");
locations.push(inClass);

var inHouse = new Location("Frat House", "You arrive at the frat house with Michaela and the party is in full swing. You see the guy who invited you to the party earlier. What will you do?");
locations.push(inHouse);

var inClub = new Location("Club", "You enter a noisy dark club with Michaela and several people are already very tipsy. Michaela goes off for a while and you dance by yourself. She comes back and offers you a drink. Do you take it?");
locations.push(inClub);

var inLibrary = new Location("Library", "You enter the quiet library and sit down at a table. Michaela sits down next to you and plays music very loudly from her headphones. She begins to dance widly in her seat. She is getting looks from everyone. What will you do?");
locations.push(inLibrary);

var inRoom = new Location("Dorm Room", "You come back to your room after a long day. What will you do now?");
locations.push(inRoom);

var inMRoom = new Location("Michaela's Dorm Room", "You finally get to see Michaela's room. It's a complete mess with dirt and clothes everywhere. It smells like dirty laundry and cans of lavender Febreeze. Michaela sits on top of clothes on her bed and invites you to sit down next to her. What do you do?"); 
locations.push(inMRoom);

var inBed = new Location("Bed", "You fall asleep and begin to dream. You see images of Michaela laughing and then transforming into a fox. Then you see people from around campus turning into foxes and Michaela, as a fox, sitting on a throne above them all. You wake up the next morning in extreme confusion. You hear a knock at the door. It's Michaela and she's wearing a very revealing Marist Red Foxes shirt. What do you say?");
locations.push(inBed);

var connections = [
    [0,1,0,0,0,1,0,0], 
    [0,0,0,0,1,1,0,0], 
    [0,0,0,0,0,0,1,0], 
    [0,0,1,0,0,1,0,0], 
    [0,0,0,0,0,1,0,0], 
    [1,0,0,1,1,0,0,1], 
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0]
];

var map = {
    loc: locations,
    connec: connections,
}

var test = function(){
    for(var i = 0; i < map.connec[0].length; i++){
        if(map.connec[0][i] === 1)
           console.log(locations[i].name);
    }
}

window.onload = test;
