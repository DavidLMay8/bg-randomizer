let enemy_count = addEnemy();

// let enemy_no = 1;

// // Create enemy count then add a new enemy and increase the count
// function addEnemy() {
//     enemy_no += 1;
//     let new_enemy = document.createElement('div');
//     new_enemy.innerHTML = "Enemy " + enemy_no + " <select id='enemyType_" + enemy_no + "'>" +
//     "<option value='infected'>Infected</option>" +
//     "<option value='survivor'>Survivor</option>" +
//     "<option value='militia'>Militia</option>" +
//     "</select>";
//     document.getElementById("add_enemies").appendChild(new_enemy);
// }

// Roll random values based on enemy stats
// function rollStats(character) {
//     var stats = inputStats(character);
//     var hp = stats[0];
//     var init = stats[1];
//     var dt = stats[2];
//     var melee = stats[3];
//     var ranged = stats[4];
//     var attacks = stats[5];

//     init_ceiling = init * 6;
//     init_res = Math.floor(Math.random() * (init_ceiling - init)) + init;
//     dt_ceiling = dt * 3;
//     dt_res = Math.floor(Math.random() * (dt_ceiling - dt)) + dt;
//     return [init_res, dt_res, hp, melee, ranged, attacks];
// }

// Generate encounter for added enemies
function generate() {
    let enemy_list = [];
    for(i = 1; i < enemy_no + 1; i++) {
        let e = document.getElementById("enemyType_" + i);
        let enemy_value = e.options[e.selectedIndex].value;
        let enemy_name = e.options[e.selectedIndex].text;

        // Create initiative values for enemies
        let stats_array = inputStats(enemy_value, i);
        let rules = inputRules(enemy_value);
        let upgrades = inputUpgrades(enemy_value)

        // Make HTML for enemy list
        enemy_list.push("<div id='enemy_" + i + "' style='display: table;'>" +
        "<h1><b>Enemy " + i + ": " + enemy_name + "</b></h1>" + "<div style='table-row;'>" +
        "<p><div style='display: table-cell; width: 250px;'>" +
        "<h2><b>Stats</b></h2>" +
        "<b>Initiative:</b> <input type='number' size='3' value='" + stats_array[0] + "'>" +
        "<p><b>Damage Threshold:</b> <input type='number' size='3' value='" + stats_array[1] + "'>" +
        "<p><b>Health:</b> " + stats_array[2] + " | " +
        "<b>Defense:</b> " + stats_array[3] +
        "<p><b>Melee:</b> <input type='number' size='3' value='" + stats_array[4] + "'> | " +
        "<b>Ranged:</b> <input type='number' size='3' value='" + stats_array[5] + "'></div>" +
        "<div style='display: table-cell; width: 200px; padding-left: 50px; padding-right: 50px;'><p><h2><b>Special Rules</b></h2> " + rules + "</div>" +
        "<div style='display: table-cell; width: 300px; padding-left: 50px; padding-right: 50px;'><p><h2><b>Attacks</b></h2> " + stats_array[6] + "</div>" +
        "<div style='display: table-cell; width: 300px; padding-left: 50px; padding-right: 50px;'><p><h2><b>Abilities & Upgrades</b></h2> " + upgrades +
        "<div id='upgradedef_" + i + "'></div></div>"
        );
    }
    str_list = enemy_list.join("")
    document.getElementById("encounter").innerHTML = str_list;

    // Show default upgrade
    // for(i = 1; i < enemy_no+1; i++) {
    //     // Get upgrades select element id and value
    //     let current_select = document.getElementById("upgrades_" + i);
    //     let current_value = current_select.value;
    //     changeUpgrade(current_select, current_value);
    // }
}

// Set upgrade information
function changeUpgrade(select, upgrade) {
    let upgrade_num = select.getAttribute("data-number");
    let upgrade_div = document.getElementById("upgradedef_" + upgrade_num);
    let upgrade_info = inputUpgrade(select.value);

    // Hide upgrade information if no Upgrades are selected
    if (select.value == "none") {
        upgrade_div.innerHTML = "";
    } else {
        upgrade_div.innerHTML = "<p><b>Cost:</b> ⚠️" + upgrade_info[0] + " | <b>Type:</b> " + upgrade_info[1] + ".<br>" + upgrade_info[2];
    }
}