function inputUpgrades(enemy) {
    switch (enemy) {
        case "banshee":
            upgrade = flee + shriek + sentry
            break;
        case "glutton":
            upgrade = vomit + erupt
            break;
        case "infected":
            upgrade = advanced_morphology + armored + brute + crawler + ghoul
            break;
        case "militia":
            upgrade = "TBD"
            break;
        case "survivor":
            upgrade = panicked
            break;
    }
    return upgrade;
}

function create_upgrade(name, cost, type, effect) {
    tooltip = "<p><div class='tooltip'><b>" + name + ":</b> ⚠️" + cost + " | " + type + "<span class='tooltiptext'><b>Cost:</b> ⚠️" + cost + " | <b>Type:</b> " + type + "</p>" +
    "<p>" + effect + "</p></span></div></p>"
    return tooltip
}

// Upgrade list
var advanced_morphology = create_upgrade("Advanced Morphology", "1", "Upgrade", "<b>Melee:</b> +1🟩 and +1🟥.")

var armored = create_upgrade("Armored", "2", "Upgrade", "<b>Initative:</b> -1d6.<br /><b>Defense Bonus:</b> 🟥(4).<br><b>Multiple Upgrades:</b> This upgrade may be taken up to three times.")

var brute = create_upgrade("Brute", "5", "Upgrade", "<b>Melee:</b> If any 🟢 are generated, generate +1🟢.<br><b>Multiple Upgrades:</b> This upgrade may be taken any number of times.")

var crawler = create_upgrade("Crawler", "0", "Upgrade", "<b>Initiative:</b> -1d6.<br><b>Melee:</b> -1🟩.<br><b>Crawl:</b> -5' to Movement. +2⬛ to all Ranged Attacks which target this enemy.")

var erupt = create_upgrade("Erupt", "5", "Ability", "When this enemy dies, it causes an Evacuation against all characters within 10 feet.")

var flee = create_upgrade("Flee", "0", "Ability", "The enemy flees an Encounter from the nearest available exit. If it is not killed during this round, it generates ⚠️10.")

var ghoul = create_upgrade("Ghoul", "10 - 2 per OL", "Upgrade", "<b>Initiative:</b> -1d6.<br><b>Melee:</b> +2🟩 and +1🟥 Slashing.")

var panicked = create_upgrade("Panicked", "0", "Upgrade", "<b>Deployment:</b> Deploy an additional 2d6! - OL with the same stats.<br>" + 
             "<b>Congestion:</b> Characters lose 1d6 🔶 at the end of their turn while in an Encounter with Panicked. A Character may make a Morale check to reduce the 🔶 by 1 per 🟢.<br>" +
             "<b>Ruckus:</b> Decrease the ⚠️ cost of any other Opponents and Opponent Upgrades added to this Encounter.")

var sentry = create_upgrade("Sentry", "1", "Upgrade", "When the Banshee begins its turn, if it wasn't dealt any damage this round, it generates ⚠️ for every 2 points of difference between its Initiative and that of the next character this round.")

var shriek = create_upgrade("Shriek", "5", "Ability", "All characters in this Encounter suffer -1d6 to their Initiative next round. The GM may make a free Encounter check.")

var vomit = create_upgrade("Sustained Vomit", "5", "Ability", "For every 3 points of difference between this enemy's Initiative and that of its target, Evacuation gets +1🟥.")

var wail = create_upgrade("Wail", "5", "Ability", "Characters must make an Awareness(Spot) check or the Banshee gets an extra turn and can use any ability that requires up to ⚠️10 for free during that turn.")
