function inputRules(enemy) {
    switch (enemy) {
        case "banshee":
            ability = "<b>Undead</b><p>"
            break;
        case "glutton":
            ability = "<b>Undead</b><p><b>Resilience 3</b><p><b>Disembowel:</b> Any melee attack against the Glutton that deals Slashing damage and doesn't inflict a wound causes a free Evacuation attack against all characters with an automatic success. The Glutton can no longer use Evacuation."
            break;
        case "infected":
            ability = "<b>Undead</b><p><b>Immunity:</b> Poison, Radiation.<p><b>Resilience 2</b>"
            break;
    }
    return ability;
}