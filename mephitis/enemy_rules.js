// Rules for each enemy
function inputRules(enemy) {
    switch (enemy) {
        case "banshee":
            ability = undead
            break;
        case "glutton":
            ability = undead + resilience("All(3). Increase to (4) against Bludgeoning") + disembowel + loud
            break;
        case "infected":
            ability = undead + resilience("1(2)")
            break;
        case "militia":
            ability = "TBD"
            break;
        case "survivor":
            ability = "TBD"
            break;
    }
    return ability;
}

function create_rule(name, effect) {
    tooltip = "<p><button id='" + name + "' class='collapsible' onclick='collapse(this.id)'><b>" + name + "</b><div class='content'><p>" + effect + "</p></span></div></p>"
    return tooltip
}

// Resilience is a function so different values may be passed.
function resilience(res) { 
    var res_rules = "<p><button id='resilience' class='collapsible' onclick='collapse(this.id)'><b>Resilience:</b> " + res + "<span class='content'>At the end of each Round, if this enemy did not suffer a wound this Round, it heals X(Value), where X is the number of 🟥 to heal and Value is the value of those 🟥 if less than or equal to the enemy's Resilience.</span></div>";
    return res_rules;
}

function collapse(e) {
    // element.classList.toggle("active");
    element = document.getElementById(e);
    var content = element.children[1];
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// } 

// Rules text
var disembowel = create_rule("Disembowel", "Any Slashing attack against this enemy which fails to inflict a wound causes an Evacuation against all characters within melee range. This enemy can no longer use Evacuation.")

var loud = create_rule("Loud", "At the beginning of each Round, this enemy generates ⚠️d3.") 

var undead = create_rule("Undead", "<b>Relentless:</b> This enemy will never flee an Encounter." + 
"<p><b>Pursuit:</b> Fleeing an Encounter with this enemy will allow the GM to make an Encounter check.</p>" +
"<p><b>Single-Minded:</b> This enemy will always resolve the effect which uses the most 🟢.</p>" + 
"<p><b>Slow:</b> This enemy may only resolve one effect during its turn, but may resolve that effect multiple times.</p>" + 
"<p><b>Immunity:</b> Poison, Radiation.</p>")