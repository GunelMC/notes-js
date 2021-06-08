const noteListElement = document.getElementById('note-list')
const noteView = new NoteView(noteListElement)
const noteController = new NoteController(NoteModel, noteView)

const createButton = document.getElementById('create')
createButton.addEventListener('click', (event) => {
  const textArea = document.getElementById('text')
  noteController.addNote(textArea.value)
})