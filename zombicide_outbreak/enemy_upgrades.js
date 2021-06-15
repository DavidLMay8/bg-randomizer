var cost;

function createInfectedUpgrades(iter) {
    upgrades = "<select data-number='" + iter + "' id='upgrades_" + iter + "'" + "onchange='changeUpgrade(this, this.value)'>" +
            "<option value='none'>None selected</option>" +        
            "<option value='advanced_morphology'>Advanced Morphology</option>" +
            "<option value='armored'>Armored</option>" +
            "<option value='brute'>Brute</option>" +
            "<option value='crawler'>Crawler</option>" +
            "<option value='ghoul'>Ghoul</option>" +
            "</select>";
    return upgrades;
}

function createSurvivorUpgrades(iter) {
    upgrades = "<select data-number='" + iter + "' id='upgrades_" + iter + "'" + "onchange='changeUpgrade(this, this.value)'>" +
            "<option value='none'>None selected</option>" +
            "<option value='panicked'>Panicked</option>" +
            "</select>";
    return upgrades;
}

// Upgrade list (includes upgrades for all enemy types)
function inputUpgrade(upgrade) {
    switch(upgrade) {
        case "advanced_morphology":
            cost = "1"
            effect = "<b>Melee:</b> +1🟩 and +1🟥."
            break;
        case "armed_guns":
            cost = "10"
            effect = ""
            break;
        case "armored":
            cost = "2"
            effect = "<b>Initiative:</b> -1d6.<br><b>Defense Bonus:</b> 🟥(4).<br><b>Multiple Upgrades:</b> This upgrade may be taken up to three times."
            break;
        case "brute":
            cost = "5"
            effect = "<b>Melee:</b> If any 🟢 are generated, generate +1🟢.<br><b>Multiple Upgrades:</b> This upgrade may be taken any number of times."
            break;
        case "crawler":
            cost = "0"
            effect = "<b>Initiative:</b> -2d6.<br><b>Melee:</b> -1🟩.<br><b>Crawl:</b> -5' to Movement. +2⬛ to all Ranged Attacks which target Crawler."
            break;
        case "ghoul":
            cost = "10 - 2 per OL"
            effect = "<b>Initiative:</b> -1d6.<br><b>Melee:</b> +2🟩 and +1🟥 Slashing."
            break;
        case "panicked":
            cost = "0"
            effect = "<b>Deployment:</b> Deploy an additional 2d6! - OL with the same stats.<br>" + 
            "<b>Congestion:</b> Characters lose 1d6 🔶 at the end of their turn while in an Encounter with Panicked. A Character may make a Morale check to reduce the 🔶 by 1 per 🟢.<br>" +
            "<b>Ruckus:</b> Decrease the ⚠️ cost of any other Opponents and Opponent Upgrades added to this Encounter."
            break;
    }
    return [cost, effect];
}