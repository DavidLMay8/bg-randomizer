let enemy_no = 1;

// Create enemy count then add a new enemy and increase the count
function addEnemy() {
    enemy_no += 1;
    let new_enemy = document.createElement('div');
    new_enemy.innerHTML = "Enemy " + enemy_no + " <select id='enemyType_" + enemy_no + "'>" +
    "<option value='infected'>Infected</option>" +
    "<option value='survivor'>Survivor</option>" +
    "<option value='militia'>Militia</option>" +
    "</select>";
    document.getElementById("add_enemies").appendChild(new_enemy);
}

// Roll random values based on enemy stats
function rollStats(character) {
    var stats = inputStats(character);
    var hp = stats[0];
    var init = stats[1];
    var dt = stats[2];
    var melee = stats[3];
    var ranged = stats[4];
    var attacks = stats[5];

    init_ceiling = init * 6;
    init_res = Math.floor(Math.random() * (init_ceiling - init)) + init;
    dt_ceiling = dt * 3;
    dt_res = Math.floor(Math.random() * (dt_ceiling - dt)) + dt;
    return [init_res, dt_res, hp, melee, ranged, attacks];
}

// Generate encounter for added enemies
function generate() {
    let new_encounter = document.createElement('div');
    let enemy_list = [];
    for(i = 1; i < enemy_no+1; i++) {
        let e = document.getElementById("enemyType_" + i);
        let enemy_value = e.options[e.selectedIndex].text;

        // Create initiative values for enemies
        // stats_array = rollStats(enemy_value);
        stats_array = inputStats(enemy_value);
        enemy_list.push('<h2><b>' + enemy_value + "</b></h2>" +
        "<b>Initiative:</b> " + stats_array[0] +
        "<p><b>Damage Threshold:</b> " + stats_array[1] +
        "<p><b>Health:</b> " + stats_array[2] +
        "<p>Melee Dice Pool: " + stats_array[3] +
        "<p>Ranged Dice Pool: " + stats_array[4] +
        "<p>Attacks: " + stats_array[5] +
        "<p>Upgrades: " + stats_array[6]
        );
    }
    str_list = enemy_list.join("")
    new_encounter.innerHTML = str_list;
    // document.getElementById("encounter").appendChild(new_encounter);
    document.getElementById("encounter").innerHTML = str_list;
}