var cost;

function BansheeUpgrades(iter) {
    upgrades = "<select data-number='" + iter + "' id='upgrades_" + iter + "'" + "onchange='changeUpgrade(this, this.value)'>" +
            "<option value='none'>None selected</option>" +
            "<option value='flee'>Flee</option>" +
            "<option value='shriek'>Shriek</option>" +
            "<option value='sentry'>Sentry</option>" +
            "</select>";
    return upgrades;
}

function GluttonUpgrades(iter) {
    upgrades = "<select data-number='" + iter + "' id='upgrades_" + iter + "'" + "onchange='changeUpgrade(this, this.value)'>" +
            "<option value='none'>None selected</option>" +
            "<option value='vomit'>Sustained Vomit</option>" +
            "</select>";
    return upgrades;
}

function InfectedUpgrades(iter) {
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

function SurvivorUpgrades(iter) {
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
            type = "Upgrade"
            effect = "<b>Melee:</b> +1🟩 and +1🟥."
            break;
        case "armed_guns":
            cost = "10"
            type = "Upgrade"
            effect = ""
            break;
        case "armored":
            cost = "2"
            type = "Upgrade"
            effect = "<b>Initiative:</b> -1d6.<br><b>Defense Bonus:</b> 🟥(4).<br><b>Multiple Upgrades:</b> This upgrade may be taken up to three times."
            break;
        case "brute":
            cost = "5"
            type = "Upgrade"
            effect = "<b>Melee:</b> If any 🟢 are generated, generate +1🟢.<br><b>Multiple Upgrades:</b> This upgrade may be taken any number of times."
            break;
        case "crawler":
            cost = "0"
            type = "Upgrade"
            effect = "<b>Initiative:</b> -1d6.<br><b>Melee:</b> -1🟩.<br><b>Crawl:</b> -5' to Movement. +2⬛ to all Ranged Attacks which target Crawler."
            break;
        case "ghoul":
            cost = "10 - 2 per OL"
            type = "Upgrade"
            effect = "<b>Initiative:</b> -1d6.<br><b>Melee:</b> +2🟩 and +1🟥 Slashing."
            break;
        case "flee":
            cost = "0"
            type = "Ability"
            effect = "The enemy flees an Encounter from the nearest available exit. If it is not killed during this round, it generates ⚠️10."
            break;
        case "none":
            cost = ""
            type = ""
            effect = ""
            break;
        case "panicked":
            cost = "0"
            type = "Upgrade"
            effect = "<b>Deployment:</b> Deploy an additional 2d6! - OL with the same stats.<br>" + 
            "<b>Congestion:</b> Characters lose 1d6 🔶 at the end of their turn while in an Encounter with Panicked. A Character may make a Morale check to reduce the 🔶 by 1 per 🟢.<br>" +
            "<b>Ruckus:</b> Decrease the ⚠️ cost of any other Opponents and Opponent Upgrades added to this Encounter."
            break;
        case "shriek":
            cost = "5"
            type = "Ability"
            effect = "All characters in this Encounter suffer -1d6 to their Initiative next round. The GM may make a free Encounter check."
            break;
        case "sentry":
            cost = "1"
            type = "Upgrade"
            effect = "When the Banshee begins its turn, if it wasn't dealt any damage this round, it generates ⚠️ for every 2 points of difference between its Initiative and that of the next character this round."
            break;
        case "vomit":
            cost = "5"
            type = "Ability"
            effect = "For every 3 points of difference between the Glutton's Initiative and that of the next character this round, Evacuation gets +1🟥."
            break;
        case "wail":
            cost = "5"
            type = "Ability"
            effect = "Characters must make an Awareness(Spot) check or the Banshee gets an extra turn and can use any ability that requires up to ⚠️10 for free during that turn."
    }
    return [cost, type, effect];
}