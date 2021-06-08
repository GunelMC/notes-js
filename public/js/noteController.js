class NoteController {
  constructor(noteModelClass, noteView) {
    this._noteModelClass = noteModelClass;
    this._noteView = noteView;
    this.notes = [];
  }

  addNote(text) {
    this.notes.push(new this._noteModelClass(text))
    this._noteView.renderNoteList(this.notes)
  }

  getNote(index) {
    let note = this.notes[index]
    this._noteView.renderNote(note)
  }
}
