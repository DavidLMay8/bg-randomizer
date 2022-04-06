// fetch('abilities.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData(data);
//     })
//     .catch(function (err) {
//         console.log(err)
//     });

function loadAbilities() {
    var abilityList = document.getElementById('abilitySelect');
    for (var i = 0; i < abilities.length; i++) {
        // console.log(abilities[i].title);
        var option = document.createElement('option');
        option.text = abilities[i].title;
        option.value = abilities[i].value;
        abilityList.appendChild(option);
    }
}

function addAbility(abilityChoice, tier) {
    // console.log(choice);
    var abilityBox = document.getElementById('abilityText');
    console.log(abilityChoice);
    var selectedAbility = abilities[abilityChoice];
    var abilityTier = 'tier_' + tier;
    console.log(selectedAbility.rules);
    var abilityName = document.createElement('button');
    abilityName.setAttribute('id', selectedAbility.title);
    abilityName.setAttribute('class', 'collapsible');
    abilityName.setAttribute('type', 'button');
    abilityName.setAttribute('onclick', 'collapse(this.id)');
    abilityName.innerHTML = selectedAbility.title;
    var abilityRules = document.createElement('span');
    console.log(selectedAbility.abilityTier);
    abilityRules.setAttribute('class', 'content');
    abilityRules.innerHTML = selectedAbility.tiers[abilityTier];
    abilityName.appendChild(abilityRules);
    abilityBox.appendChild(abilityName);

    var children = abilityName.children[0];
    console.log(children);
}

function collapse(e) {
    // element.classList.toggle("active");
    var element = document.getElementById(e);
    var content = element.children[0];
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

// Abilities JSON
const abilities = [
    {
        "title": "Poisonous Skin",
        "value": 0
    },
    {
        "title": "Rage",
        "value": 1,
        "attribute": "Body",
        "rules": "On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:\n    - Add 1🟩 to Athletics checks and Athletics save throws.\n",
        "tier_1": [
            "tier_1", "test"
        ]
            
    }
]