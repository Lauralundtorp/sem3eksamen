function search_animal() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let animals = document.getElementsByClassName('animals');

    for (let i = 0; i < animals.length; i++) {
        let animal = animals[i];
        let description = animal.nextElementSibling; // Get the next sibling <p> tag

        if (!animal.innerHTML.toLowerCase().includes(input)) {
            animal.style.display = "none"; // Skjuler
            description.style.display = "none"; // Skjuler p tag teksten
        } else {
            animal.style.display = "list-item"; // Viser navnene/søg elementerne fra listen
            description.style.display = "block"; // Vis teksten <p>
        }
    }
}