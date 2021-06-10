class NoteController {
  constructor(noteModelClass, noteView) {
    this._noteModelClass = noteModelClass;
    this._noteView = noteView;
    const storedNotes = JSON.parse(localStorage.getItem("notes"))
    this.notes = [];
    if (storedNotes) {
      this.notes = this.notes.concat(storedNotes)
    }
    this._noteView.renderNoteList(this.notes)
  }

  async addNote(text) {
    if (/^\s*$/.test(text)) {
      return; 
    }

    await fetch("https://makers-emojify.herokuapp.com/", {
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
      localStorage.setItem("notes", JSON.stringify(this.notes))
    })
  }

  getNote(index) {
    let note = this.notes[index]
    this._noteView.renderNote(note)
  }

  deleteNote(index) {
     this.notes.splice(index, 1) 
     localStorage.setItem("notes", JSON.stringify(this.notes))
     this._noteView.renderNoteList(this.notes)
  }
}
