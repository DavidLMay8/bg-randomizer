// Stats for various enemies
var hp;
var agility;
var dt;

function inputStats(input) {
    switch(input) {
        case "Infected":
            agility = 2;
            dt = 5;
            hp = 1;
            melee = 6;
            ranged = 0;
            attacks = "Slam: 🟢-🟥 Bludgeoning" +
            "<br>Gouge: 🟢🟢-🟥 Slashing" +
            "<br>Bite: 🟢🟢🟢⚠️⚠️⚠️-🟥🟥🟥 Slashing, Viral(1)";
            upgrades = " <select id='upgrades'>" +
            "<option value='advanced_morphology'>Advanced Morphology</option>" +
            "<option value='armored'>Armored</option>" +
            "<option value='brute'>Brute</option>" +
            "</select>";
            break;
        case "Survivor":
            agility = 3;
            dt = 3;
            hp = 3;
            melee = 3;
            ranged = 5;
            attacks = "TBD";
            break;
        case "Militia":
            agility = 4;
            dt = 4;
            hp = 5;
            melee = 6;
            ranged = 5;
            attacks = "TBD";
            break;
    }
    init_ceiling = agility * 6;
    init_res = Math.floor(Math.random() * (init_ceiling - agility)) + agility;
    dt_ceiling = dt * 3;
    dt_res = Math.floor(Math.random() * (dt_ceiling - dt)) + dt;

    return [init_res, dt_res, hp, melee, ranged, attacks, upgrades];
}