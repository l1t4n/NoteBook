const input = document.getElementById('input');
const addNote = document.getElementById('addedNotes');
const btn = document.getElementById('btnNote');

addNote.innerHTML = (localStorage.getItem('Notes') || '');

input.focus();




btn.addEventListener('click', () => {
    console.log(input.value);
    addNote.innerHTML += `
        <div class="notes-wrapper">
            <div class="note">
                ${input.value}
            </div>
            <button class="removeNote">
                X
            </button>
        </div>
    `;
    input.value = '';
    input.focus();
    localStorage.setItem('Notes', String(addNote.innerHTML));
    if (localStorage.Notes) {
        localStorage.removeItem('Notes');
        localStorage.setItem('Notes', String(addNote.innerHTML));
    }
});

addNote.addEventListener('click', (event) => {
    if (event.target.classList.contains('removeNote')) {
        event.target.parentNode.remove();
        localStorage.removeItem('Notes');
        localStorage.setItem('Notes', String(addNote.innerHTML));
    }
});




 