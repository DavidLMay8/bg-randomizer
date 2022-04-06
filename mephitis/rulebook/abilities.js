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
        "title": "Poisonous Skin",
        "value": 0
    },
    {
        "title": "Rage",
        "value": 1,
        "attribute": "Body",
        "rules": "On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:<p>• Add 1🟩 to Athletics checks and Athletics save throws.</p><p>• If at least 1🟢 is generated during an Athletics(Melee) attack, add a number of 🟦 to your dice pool equal to the Mastery value of the Rage tier table.</p><p>• You gain defense against bludgeoning, piercing, and slashing damage according to the Defense value of the Rage tier table.</p><p>If you are able to cast spells, you can't cast them or concentrate on them while raging.</p><p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if you turn ends and you haven't attacked an enemy since your last turn. You may also end your rage on your turn as a bonus action.</p><p>Once you have raged a number of times equal to the Uses value of the Rage tier table, you must finish a long rest before you can rage again.</p><p><table><tr><th>Tier</th><th>Uses</th><th>Mastery</th><th>Defense</th></tr><tr><th>1</th><td>2</td><td>1</td><td>🟥(lowest)</td></tr><tr><th>2</th><td>4</td><td>2</td><td>🟥(3)</td></tr><tr><th>3</th><td>6</td><td>3</td><td>🟥</td></tr></table></p>"
    }
]