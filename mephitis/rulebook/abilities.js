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

function addAbility(abilityChoice) {
    var abilityBox = document.getElementById('abilityText');
    var selectedAbility = abilities[abilityChoice];
    var abilityDiv = document.createElement('div');
    var abilityRules = document.createElement('p');
    var deleteButton = document.createElement('button');
    abilityDiv.setAttribute('id', selectedAbility.title);
    // abilityDiv.setAttribute('name', selectedAbility.title);
    abilityDiv.innerHTML = '<h3>' + selectedAbility.title + '</h3>';
    abilityRules.innerHTML = selectedAbility.rules;
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', selectedAbility.title + 'Button');
    deleteButton.setAttribute('onclick', 'deleteAbility(this.id)');
    deleteButton.innerHTML = 'Remove'
    abilityDiv.appendChild(abilityRules);
    abilityDiv.appendChild(deleteButton);
    abilityBox.appendChild(abilityDiv);
}

function createAbility() {
    var abilityBox = document.getElementById('abilityText');
    var createdAbilityName = document.getElementById('abilityName').value;
    var createdAbility = document.getElementById('ability-text').value;
    var abilityDiv = document.createElement('div');
    var abilityRules = document.createElement('p');
    var deleteButton = document.createElement('button');
    abilityDiv.setAttribute('id', createdAbilityName);
    abilityDiv.innerHTML = '<h3>' + createdAbilityName + '</h3>';
    abilityRules.innerHTML = createdAbility;
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', createdAbilityName + 'Button');
    deleteButton.setAttribute('onclick', 'deleteAbility(this.id)');
    deleteButton.innerHTML = 'Remove'
    abilityDiv.appendChild(abilityRules);
    abilityDiv.appendChild(deleteButton);
    abilityBox.appendChild(abilityDiv);
}

function deleteAbility(e) {
    var deletedElement = document.getElementById(e).parentElement;
    deletedElement.remove();
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
        "title": "Magical Tinkering",
        "value": 0,
        "rules": "<p>You are able to invest a spark of magic into mundane objects. To use this ability, you must have thieves’ tools or artisan’s tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:\n<br>• The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.\n<br>• Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.\n<br>• The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.\n<br>• A static visual effect appears on one of the object’s surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</p>\n\n<p>The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.</p>\n\n<p>You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Knowledge Score (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.</p>"
    },
    {
        "title": "Poisonous Skin",
        "value": 1,
        "rules": "<p>Whenever a character comes into direct contact with your skin, that character must make a Constitution save throw. You may choose a number of 🟩 up to the <b>Dice<\/b> value and subtract the <b>Potency<\/b> value from their result (💢 or ⚠️ may be spent to force success as normal). If the save throw fails, the character becomes poisoned if they aren't already and they gain a number of poison points equal to the <b>Poison<\/b> value.<\/><p>At the end of a poisoned character's turn, you roll 1d6 for each poison point that character has. For every 6 rolled, that character suffers 1🟥 poison. Then that character's poison points are reduced by half, rounding up.</p><p><table><tr><th>Tier</th><th>Dice</th><th>Potency<\/th><th>Poison<\/th><\/tr><tr><th>1<\/th><td>2<\/td><td>1d3<\/td><td>1d3<\/td><\/tr><tr><th>2<\/th><td>2<\/td><td>1d3 + 1<\/td><td>1d6<\/td><\/tr><tr><th>3<\/th><td>4<\/td><td>1d3 + 3<\/td><td>1d6 + 3<\/td><\/tr><\/table><\/p>"
    },
    {
        "title": "Rage",
        "value": 2,
        "rules": "On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:<p>• Add 1🟩 to Athletics checks and Athletics save throws.<\/p><p>• If at least 1🟢 is generated during an Athletics(Melee) attack, add a number of 🟦 to your dice pool equal to the <b>Mastery<\/b> value of the Rage tier table.<\/p><p>• You gain defense against bludgeoning, piercing, and slashing damage according to the <b>Defense<\/b> value of the Rage tier table.<\/p><p>If you are able to cast spells, you can't cast them or concentrate on them while raging.<\/p><p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if you turn ends and you haven't attacked an enemy since your last turn. You may also end your rage on your turn as a bonus action.<\/p><p>Once you have raged a number of times equal to the <b>Uses<\/b> value of the Rage tier table, you must finish a long rest before you can rage again.<\/p><p><table><tr><th>Tier<\/th><th>Uses<\/th><th>Mastery<\/th><th>Defense<\/th><\/tr><tr><th>1<\/th><td>2<\/td><td>1<\/td><td>🟥(lowest)<\/td><\/tr><tr><th>2<\/th><td>4<\/td><td>2<\/td><td>🟥(3)<\/td><\/tr><tr><th>3<\/th><td>6<\/td><td>3<\/td><td>🟥<\/td><\/tr><\/table><\/p>"
    }
]