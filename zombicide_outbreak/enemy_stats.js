// Stats for various enemies
var hp;
var agility;
var dt;

function inputStats(enemy, iter) {
    switch(enemy) {
        case "Infected":
            agility = 2;
            dt = 5;
            hp = 1;
            melee = "6🟩";
            ranged = "N/A";
            attacks = "<b>Slam:</b> 🟢-🟥 Bludgeoning" +
            "<p><b>Gouge:</b> 🟢🟢-🟥 Slashing" +
            "<p><b>Bite:</b> 🟢🟢🟢⚠️⚠️⚠️-🟥🟥🟥 Slashing, Viral(1)";
            upgrades = createInfectedUpgrades(iter);
            break;
        case "Survivor":
            agility = 3;
            dt = 3;
            hp = 3;
            melee = "3🟩";
            ranged = "5🟩";
            attacks = "TBD";
            upgrades = createSurvivorUpgrades(iter);
            break;
        case "Militia":
            agility = 4;
            dt = 4;
            hp = 5;
            melee = 6;
            ranged = 5;
            attacks = "TBD";
            upgrades = "TBD";
            break;
    }
    init_ceiling = agility * 6;
    init_res = Math.floor(Math.random() * (init_ceiling - agility)) + agility;
    dt_ceiling = dt * 3;
    dt_res = Math.floor(Math.random() * (dt_ceiling - dt)) + dt;

    return [init_res, dt_res, hp, melee, ranged, attacks, upgrades];
}