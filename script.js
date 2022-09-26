"use strict";

// Create arrays to store title and note
let titles = ["Notiz", "Notiz-2"];
let notes = ["Deine 1 Notiz :)", "Deine 2 Notiz"];

// Get input elements
let titleInput = document.querySelector("#titleInput");
let noteInput = document.querySelector("#noteInput");


// Create render function to display titles and notes
function render() {
    // Get notes container to put there title and notes
    let noteContainer = document.querySelector(".notesContainer");
    // Empty the container, so that we dont get duplicate content
    noteContainer.innerHTML = "";

    // Create an for loop to loop over all indexes of title and note arrays. 
    for (let i = 0; i < titles.length; i++) {
        // Now we only need place each variable name to get the desired ouput
        let title = titles[i];
        let note = notes[i];

        // Create necessary html content to place there the values
        noteContainer.innerHTML += `
            <div class="note">
            <div class="trashBtn">
                    <i onclick="deleteNote(${i})" class="fa-solid fa-trash"></i>
                </div>
                <h3>${title}</h3>
                <p>${note}</p>
            </div>
        `;
    }
}



// Function to add new notes
function addNote() {
    // Push each input field in an array index
    titles.push(titleInput.value);
    notes.push(noteInput.value);

    render();
}


// Function to delete notes
function deleteNote(i) {
    titles.splice(i, 1);
    notes.splice(i, 1);

    render();
}

// Function to save notes in localstorage


// Function to display notes even after an refresh from localstorage