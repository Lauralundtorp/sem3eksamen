const qaListe = [
    {
        spørgsmål: "Hvem er Rasmus?",
        valgmuligheder: ["Rektor", "Pedel", "Kok", "Lærer"],
        rigtigtSvar: 0,
        billede: "fotos/rektor.png"
    },
    {
        spørgsmål: "Hvor finder jeg mit skema?",
        valgmuligheder: ["Wiseflow", "Timeedit", "Outlook", "Zealands hjemmeside"],
        rigtigtSvar: 1,
        billede: "fotos/skema.png"
    },
    {
        spørgsmål: "Hvor afleverer jeg min eksamen?",
        valgmuligheder: ["Moodle", "Outlook", "Timeedit", "Wiseflow"],
        rigtigtSvar: 3,
        billede: "fotos/spørg.png"
    },
    {
        spørgsmål: "Hvem skal jeg kontakte, hvis jeg vil lave takeover på Zealands instagram?",
        valgmuligheder: ["Anette", "Jørgen", "Signe", "Rasmus"],
        rigtigtSvar: 2,
        billede: "fotos/insta.png"
    }
];

let nuvaerendeIndex = 0;
let valgtTilladt = true; // Forhindrer valg af nyt svar før næste spørgsmål


function opdaterQASkift() {
    // Nulstil farver og tillad valg
    valgtTilladt = true;
    document.querySelectorAll('.valgmulighed').forEach(function(element) {
        element.classList.remove('rigtig', 'forkert');
    });

    // Opdater spørgsmålet og valgmulighederne
    document.getElementById("spørgsmål").innerHTML = qaListe[nuvaerendeIndex].spørgsmål;
    document.getElementById("valgmulighed1").innerHTML = qaListe[nuvaerendeIndex].valgmuligheder[0];
    document.getElementById("valgmulighed2").innerHTML = qaListe[nuvaerendeIndex].valgmuligheder[1];
    document.getElementById("valgmulighed3").innerHTML = qaListe[nuvaerendeIndex].valgmuligheder[2];
    document.getElementById("valgmulighed4").innerHTML = qaListe[nuvaerendeIndex].valgmuligheder[3];

    // Opdater billede
    document.getElementById("billede").src = qaListe[nuvaerendeIndex].billede; // Tilføj denne linje
}


// Funktion der tjekker om det valgte svar er rigtigt
function tjekSvar(valgtIndex) {
    if (!valgtTilladt) return; // Forhindrer flere valg
    valgtTilladt = false;

    const rigtigtSvar = qaListe[nuvaerendeIndex].rigtigtSvar;

    if (valgtIndex === rigtigtSvar) {
        document.getElementById("valgmulighed" + (valgtIndex + 1)).classList.add('rigtig');
    } else {
        document.getElementById("valgmulighed" + (valgtIndex + 1)).classList.add('forkert');
        document.getElementById("valgmulighed" + (rigtigtSvar + 1)).classList.add('rigtig');
    }
}

// Event listener til knappen for at gå til næste spørgsmål
document.getElementById("næsteKnapp").addEventListener("click", function() {
    nuvaerendeIndex++;

    // Hvis vi når slutningen af listen, start forfra
    if (nuvaerendeIndex >= qaListe.length) {
        nuvaerendeIndex = 0;
    }

    // Opdater spørgsmålet og valgmulighederne
    opdaterQASkift();
});

// Start ved første spørgsmål og svar
opdaterQASkift();