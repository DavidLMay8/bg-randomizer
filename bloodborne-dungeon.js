var coreHunters = [
    "Saw Cleaver",
    "Threaded Cane",
    "Hunter Axe",
    "Ludwig's Holy Blade"
]
var bloodMoonHunters = [
    "Kirkhammer",
    "Tonitrus",
    "Blade of Mercy",
    "Ludwig's Uncanny Holy Blade",
    "Logarius' Wheel",
    "Burial Blade"
]
var chaliceHunters = [
    "Beast Claw",
    "Chikage",
    "Stake Driver",
    "Rifel Spear"
]
var cainhurstHunter = "Reiterpallasch"
var hunterList = []

function addToList(x, list) {
    let i;
    for (i = 0; i < x.length; i++) {
        list.push(x[i]);
    }
}

function createDungeon() {
    document.cookie = "name=test"
    document.cookie = "works=yes"
}