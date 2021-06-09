const noteListElement = document.getElementById('note-list')
const noteElement = document.getElementById('single-note')
const noteAdderElement = document.getElementById('note-adder')
const noteView = new NoteView(noteListElement, noteElement, noteAdderElement)
const noteController = new NoteController(NoteModel, noteView)

const createButton = document.getElementById('create')
createButton.addEventListener('click', (event) => {
  const textArea = document.getElementById('text')
  noteController.addNote(textArea.value)
})


window.addEventListener("hashchange", ()=>{
  noteController.getNote(window.location.hash.split("#")[1])
})