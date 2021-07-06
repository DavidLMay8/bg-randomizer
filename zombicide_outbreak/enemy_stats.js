// Stats for various enemies
var hp;
var agility;
var dt;
let enemy_no = 0;

// Create enemy count then add a new enemy and increase the count
function addEnemy() {
    enemy_no += 1;
    let new_enemy = document.createElement('div');
    new_enemy.innerHTML = "Enemy " + enemy_no + " <select id='enemyType_" + enemy_no + "'>" +
    "<optgroup label='The Undead'>" +
    "<option value='infected'>Basic Infected</option>" +
    "<option value='banshee'>Banshee</option>" +
    "<option value='glutton'>Glutton</option>" +
    "<optgroup label='The Living'>" +
    "<option value='militia'>Militia</option>" +
    "<option value='survivor'>Survivor</option>" +
    "</select>";
    document.getElementById("add_enemies").appendChild(new_enemy);

    return enemy_no;
}

function inputStats(enemy, iter) {
    switch(enemy) {
        case "banshee":
            agility = 2;
            dt = 5;
            hp = 1;
            defense = 0;
            melee = 4;
            ranged = 0;
            attacks = stun + bash;
            break;
        case "glutton":
            agility = 1;
            dt = 7;
            hp = 1;
            defense = "🟥 Bludgeoning, Thermal, Electrical"
            melee = 7;
            ranged = 0;
            attacks =  body_slam + evacuation + gouge + bite
            break;
        case "infected":
            agility = 2;
            dt = 5;
            hp = 1;
            defense = "🟥 Bludgeoning"
            melee = 6;
            ranged = 0;
            attacks = slam + gouge + bite;
            break;
        case "militia":
            agility = 4;
            dt = 4;
            hp = 5;
            defense = "🟥 Bludgeoning"
            melee = 6;
            ranged = 5;
            attacks = "TBD";
            break;
        case "survivor":
            agility = 3;
            dt = 3;
            hp = 3;
            defense = "0"
            melee = 3;
            ranged = 5;
            attacks = "TBD";
            break;
    }
    init_ceiling = agility * 6;
    init_res = Math.floor(Math.random() * (init_ceiling - agility)) + agility;
    dt_ceiling = dt * 3;
    dt_res = Math.floor(Math.random() * (dt_ceiling - dt)) + dt;

    return [init_res, dt_res, hp, defense, melee, ranged, attacks];
}

// List of attacks

var bash = "<p><b>Bash:</b> 🟢🟢-🟥 Bludgeoning"

var bite = "<p><b>Bite:</b> 🟢🟢🟢⚠️⚠️⚠️-🟥🟥🟥 Slashing, Viral 1"

var body_slam = "<b>Body Slam:</b> 🟢-🟥🟥 Bludgeoning"

var evacuation = "<p><b>Evacuation:</b> 🟢🟢- Target in melee range suffers Viral 1 and Squalor. The GM may make a free Encounter check."

var gouge = "<p><b>Gouge:</b> 🟢🟢-🟥 Slashing"

var slam = "<b>Slam:</b> 🟢-🟥 Bludgeoning"

var stun = "<b>Stun:</b> 🟢-Target suffers -2d6 to their Initiative next round."