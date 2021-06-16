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
            defense = "None"
            melee = 4;
            ranged = 0;
            attacks = "<b>Stun:</b> 🟢-Target suffers -2d6 to their Initiative next round." +
            "<p><b>Bash:</b> 🟢🟢-🟥 Bludgeoning";
            upgrades = BansheeUpgrades(iter);
            break;
        case "glutton":
            agility = 1;
            dt = 7;
            hp = 1;
            defense = "🟥 Bludgeoning, Thermal, Electrical"
            melee = 7;
            ranged = 0;
            attacks = "<b>Body Slam:</b> 🟢-🟥🟥 Bludgeoning" +
            "<p><b>Evacuation:</b> 🟢🟢- Target in Grapple range suffers Viral(1) and Squalor. The GM may make a free Encounter check." +
            "<p><b>Gouge:</b> 🟢🟢-🟥 Slashing" +
            "<p><b>Bite:</b> 🟢🟢🟢⚠️⚠️⚠️-🟥🟥🟥 Slashing, Viral(1)";
            upgrades = GluttonUpgrades(iter);
            break;
        case "infected":
            agility = 2;
            dt = 5;
            hp = 1;
            defense = "🟥 Bludgeoning"
            melee = 6;
            ranged = 0;
            attacks = "<b>Slam:</b> 🟢-🟥 Bludgeoning" +
            "<p><b>Gouge:</b> 🟢🟢-🟥 Slashing" +
            "<p><b>Bite:</b> 🟢🟢🟢⚠️⚠️⚠️-🟥🟥🟥 Slashing, Viral(1)";
            upgrades = InfectedUpgrades(iter);
            break;
        case "Militia":
            agility = 4;
            dt = 4;
            hp = 5;
            defense = "TBD"
            melee = 6;
            ranged = 5;
            attacks = "TBD";
            upgrades = "TBD";
            break;
        case "Survivor":
            agility = 3;
            dt = 3;
            hp = 3;
            defense = "TBD"
            melee = 3;
            ranged = 5;
            attacks = "TBD";
            upgrades = SurvivorUpgrades(iter);
            break;
    }
    init_ceiling = agility * 6;
    init_res = Math.floor(Math.random() * (init_ceiling - agility)) + agility;
    dt_ceiling = dt * 3;
    dt_res = Math.floor(Math.random() * (dt_ceiling - dt)) + dt;

    return [init_res, dt_res, hp, defense, melee, ranged, attacks, upgrades];
}