class NoteController {
  constructor(noteModelClass, noteView) {
    this._noteModelClass = noteModelClass;
    this._noteView = noteView;
    this.notes = [];
  }

  addNote(text) {
    fetch("https://makers-emojify.herokuapp.com/", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({text: text})
    })
    .then(response => response.json())
    .then(data => {
      this.notes.push(new this._noteModelClass(data.emojified_text))
      this._noteView.renderNoteList(this.notes)
    })
  }

  getNote(index) {
    let note = this.notes[index]
    this._noteView.renderNote(note)
  }
}
