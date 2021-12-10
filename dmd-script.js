let investigatorCount
let investigatorList = []
let investigatorResult = ""
let seasonOneInvestigators = [
    "Ahmed",
    "Fatima",
    "Ian",
    "The Kid",
    "Rasputin",
    "Borden",
    "Morgan",
    "Sister Beth",
    "Elizabeth",
    "Adam"

]
let seasonTwoInvestigators = [
    "Adilah",
    "Luke",
    "Mary",
    "Mario",
    "Alex",
    "Sam",
    "Tony",
    "Hailia",
    "Margarethe",
    "Ariele"
]
let unspeakableInvestigators = [
    "Julia",
    "Al",
    "Richard",
    "Maki",
    "Tina",
    "Fleur",
    "Maxim",
    "Roxie",
    "Margie",
    "Meryl",
    "Pops",
    "Walter",
    "Vincent",
    "Gonk",
    "Josephine",
    "Bert",
    "Ernest",
    "Olivia"
]
let scarlettHayes = ["Scarlett Hayes"]

let episodeCount
let episodeList = []
let episodeResult = ""
let seasonOneEpisodes = [
    "Season One<br>Episode One<br>Blasphemous Alchemy",
    "Season One<br>Episode Two<br>Tomes of Madness",
    "Season One<br>Episode Three<br>Danse Macabre",
    "Season One<br>Episode Four<br>Eldritch Idols",
    "Season One<br>Episode Five<br>Accursed Tide",
    "Season One<br>Episode Six<br>Unspeakable Hour"
]
let seasonTwoEpisodes = [
    "Season Two. Episode One - Strange Bedfellows",
    "Season Two. Episode Two - Nameless Woods",
    "Season Two. Episode Three - Sanctificetur Nomen",
    "Season Two. Episode Four - Shootout at the H.P. Corral",
    "Season Two. Episode Five - Monsters in Sin City",
    "Season Two. Episode Six - Endgame"
]
let unspeakableEpisodes = [
    "Lost Episode One - Speak Fhtagn or Die!",
    "Lost Episode Two - Bright Lights, Big Monsters",
    "Lost Episode Three - Happy Birthday"
]
let rlyehRisingEpisode = ["Epic Episode - R'lyeh Rising"]

let elderOneList = []
let elderOneResult = ""
let seasonOneElderOnes = [
    "Cthulhu", 
    "Hastur"
]
let unspeakableElderOnes = [
    "Dagon",
    "Yog-Sothoth",
]
let blackGoat = ["Black Goat of the Woods"]
let yogSothoth = ["Yog-Sothoth"]

function SwapDisplay() {
    if (document.getElementById("config").style.display != "none") {
        document.getElementById("config").style.display = "none";
        document.getElementById("nowPlaying").style.display = "block";
    } else {
        document.getElementById("nowPlaying").style.display = "none";
        document.getElementById("config").style.display = "block";
    }
}

// Create investigator pool.
function addInvestigators(x) {
    var i 
    for (i = 0; i < x.length; i++) {
        investigatorList.push(x[i])
    } 
}

// Create episode pool.
function addEpisodes(x) {
    var i
    for (i = 0; i < x.length; i++) {
        episodeList.push(x[i])
    }
}

// Create elder one pool.
function addElderOnes(x) {
    var i
    for (i = 0; i < x.length; i++) {
        elderOneList.push(x[i])
    }
}

function collapseResults() {
    document.getElementById("resultDiv").style="display: none;"
    document.getElementById("collectionDiv").style="display: auto;"
}

function collapseCollection() {
    document.getElementById("collectionDiv").style="display: none;"
}

function toggleCollapse() {
    var elements = document.getElementsByClassName("collapsible");
    var i;
    var button = document.getElementById("collapseButton");

    if (button.innerHTML == "Collapse") {
        button.innerHTML = "Expand";
    } else {
        button.innerHTML = "Collapse";
    }

    for (i = 0; i < elements.length; i++) {
        if (elements[i].style.display != "none") {
            elements[i].style.display = "none";
        } else {
            elements[i].style.display = "block";
        }
    }
}

function loadCookies() {
    var data = document.cookie.split("=");
    for (var i=0; i<data.length; i++) {
        document.getElementById(data[i]).checked = true;
    }
    alert(document.cookie + "should be checked");
}

function saveCollection() {
    var checkboxes = document.getElementsByName("dmdcheckbox");
    var checkboxesChecked = [];
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].id);
        }
    }
    document.cookie = "checkboxSettings=" + checkboxesChecked +"; max-age=60*60*24*365";
    alert(checkboxesChecked);
}

function showInput() {
    // document.getElementById("resultDiv").style="display: block;"
    investigatorList = []
    episodeList = []
    elderOneList = []
    let totalCount = 0
    investigatorResult = ""
    episodeResult = ""
    elderOneResult = ""
    let investigatorDropdownSelection = document.getElementById("investigatorCountDropdown")
    let investigatorCount = investigatorDropdownSelection.options[investigatorDropdownSelection.selectedIndex].text

    // Add investigators to the investigator pool based on checked boxes.
    if (document.getElementById("seasonOneInvestigators_checkbox").checked) {
        addInvestigators(seasonOneInvestigators)
    }
    if (document.getElementById("seasonTwoInvestigators_checkbox").checked) {
        addInvestigators(seasonTwoInvestigators)
    }
    if (document.getElementById("unspeakableInvestigators_checkbox").checked) {
        addInvestigators(unspeakableInvestigators)
    }
    if (document.getElementById("scarlettHayes_checkbox").checked) {
        addInvestigators(scarlettHayes)
    }

    // Add episodes to the episode pool based on checked boxes.
    if (document.getElementById("seasonOneEpisodes_checkbox").checked) {
        addEpisodes(seasonOneEpisodes)
    }
    if (document.getElementById("seasonTwoEpisodes_checkbox").checked) {
        addEpisodes(seasonTwoEpisodes)
    }
    if (document.getElementById("unspeakableEpisodes_checkbox").checked) {
        addEpisodes(unspeakableEpisodes)
    }
    if (document.getElementById("rlyehRisingEpisode_checkbox").checked) {
        addEpisodes(rlyehRisingEpisode)
    }

    // Add elder ones to the elder one pool based on checked boxes.
    if (document.getElementById("seasonOneElderOnes_checkbox").checked) {
        addElderOnes(seasonOneElderOnes)
    }
    if (document.getElementById("unspeakableElderOnes_checkbox").checked) {
        addElderOnes(unspeakableElderOnes)
    }
    if (document.getElementById("blackGoat_checkbox").checked) {
        addElderOnes(blackGoat)
    }
    if (document.getElementById("yogSothoth_checkbox").checked) {
        addElderOnes(yogSothoth)
    }

    totalCount = investigatorList.length // Count the number of investigators available before they get removed from the array so we can warn if the team will be larger than the available investigators.
    
    var i
    for (i = 0; i < investigatorCount; i++) {
        var rand = Math.floor(Math.random()*investigatorList.length)
        var num = investigatorList[rand]
        investigatorList.splice(rand,1) 
        investigatorResult += num + "<br/>" 
    }
    if (totalCount < investigatorCount) {
        investigatorResult = "Not enough investigators!"
    }
    document.getElementById("investigators").innerHTML = investigatorResult

    var randEpisode = Math.floor(Math.random()*episodeList.length)
    episodeResult = episodeList[randEpisode]
    if (episodeList.length < 1) {
        episodeResult = "No episodes selected!"
    }
    document.getElementById("episode").innerHTML = episodeResult

    var randElderOne = Math.floor(Math.random()*elderOneList.length)
    elderOneResult = elderOneList[randElderOne]
    if (elderOneList < 1) {
        elderOneResult = "No Elder Ones selected!"
    }
    if (episodeResult == "Epic Episode - R'lyeh Rising") {
        elderOneResult = "Cthulhu (R'lyeh Rising)"
    }
    document.getElementById("elderOne").innerHTML = elderOneResult

    // if (document.getElementsByClassName("collapsible").style.display != "none") {
    //     toggleCollapse()
    // }
}

function checkall_investigators(source, type) {
    checkboxes = document.getElementsByClassName('investigator_checkbox');
    for(var i=0, n=checkboxes.length; i<n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function checkall_episodes(source, type) {
    checkboxes = document.getElementsByClassName('episode_checkbox');
    for(var i=0, n=checkboxes.length; i<n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function checkall_elderOnes(source, type) {
    checkboxes = document.getElementsByClassName('elderOne_checkbox');
    for(var i=0, n=checkboxes.length; i<n; i++) {
        checkboxes[i].checked = source.checked;
    }
    uncheck_yogSothoth()
}

function checkall_seasonOne(source) {
    checkboxes = document.getElementsByClassName('seasonOne_checkbox');
    for(var i=0, n=checkboxes.length; i<n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function checkall_seasonTwo(source) {
    checkboxes = document.getElementsByClassName('seasonTwo_checkbox');
    for(var i=0, n=checkboxes.length; i<n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function checkall_unspeakable(source) {
    checkboxes = document.getElementsByClassName('unspeakable_checkbox');
    for(var i=0, n=checkboxes.length; i<n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

// If Unspeakable Box Elder Ones is checked, Yog-Sothoth should be unchecked
function uncheck_yogSothoth() {
    if (document.getElementById("unspeakableElderOnes_checkbox").checked) {
        document.getElementById("yogSothoth_checkbox").checked = false
        document.getElementById("yogSothoth_checkbox").disabled = true
    }
    else {
        document.getElementById("yogSothoth_checkbox").disabled = false
    }
}