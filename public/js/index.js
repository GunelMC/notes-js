const noteListElement = document.getElementById('note-list')
const noteElement = document.getElementById('single-note')
const noteAdderElement = document.getElementById('note-adder')
const noteView = new NoteView(noteListElement, noteElement, noteAdderElement)
const noteController = new NoteController(NoteModel, noteView)


const createButton = document.getElementById('create')
createButton.addEventListener('click', (event) => {
  const textArea = document.getElementById('text')
  noteController.addNote(textArea.value)
  textArea.value = ""
})


window.addEventListener("hashchange", ()=>{
  if (window.location.hash.split("#")[1] === undefined) {
    return
  } else {
    noteController.getNote(window.location.hash.split("#")[1])
  };
})

const deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click', (event) => {
  noteController.deleteNote(window.location.hash.split("#")[1])
})
