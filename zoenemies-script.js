let enemy_no = 0;

// Create enemy count then add a new enemy and increase the count
function addEnemy() {
    enemy_no += 1;
    var new_enemy = document.createElement('div');
    new_enemy.innerHTML = "Enemy " + enemy_no + " <select id='enemyType_" + enemy_no + "'>" +
    "<option value='infected'>Infected</option>" +
    "<option value='survivor'>Survivor</option>" +
    "<option value='militia'>Militia</option>" +
    "</select>";
    document.getElementById("add_enemies").appendChild(new_enemy);
}

function generate() {
    var new_encounter = document.createElement('div');
    var enemy_list = [];
    for(i = 1; i < enemy_no+1; i++) {
        var e = document.getElementById("enemyType_" + i);
        var enemy_value = e.options[e.selectedIndex].text;

        // Create initiative values for enemies
        stats_array = rollStats(enemy_value);
        enemy_list.push('<h2><b>' + enemy_value + "</b></h2>" +
        "Initiative: " + stats_array[0] +
        "<br>Damage Threshold: " + stats_array[1] +
        "<br>Health: " + stats_array[2]
        );
    }
    str_list = enemy_list.join("")
    new_encounter.innerHTML = str_list;
    // document.getElementById("encounter").appendChild(new_encounter);
    document.getElementById("encounter").innerHTML = str_list;
}

// Infected values
infected_hp = 1;
infected_agility = 2;
infected_dt = 5;

// Survivor values
survivor_hp = 3;
survivor_agility = 3;
survivor_dt = 3;

// Militia values
militia_hp = 5;
militia_agility = 4;
militia_dt = 4;

function rollStats(character) {
    var init = 0;
    var dt = 0;
    var hp = 0;
    switch(character) {
        case "Infected":
            init = infected_agility;
            dt = infected_dt;
            hp = infected_hp;
            break;
        case "Survivor":
            init = survivor_agility;
            dt = survivor_dt;
            hp = survivor_hp;
            break;
        case "Militia":
            init = militia_agility;
            dt = militia_dt;
            hp = militia_hp;
    }
    init_ceiling = init * 6;
    init_res = Math.floor(Math.random() * (init_ceiling - init)) + init;
    dt_ceiling = dt * 3;
    dt_res = Math.floor(Math.random() * (dt_ceiling - dt)) + dt;
    return [init_res, dt_res, hp];
}