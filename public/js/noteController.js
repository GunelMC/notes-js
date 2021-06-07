class NoteController {
  constructor(noteModelClass) {
    this._noteModelClass = noteModelClass
    this.notes = [];
  }

  addNote(text) {
    this.notes.push(new this._noteModelClass(text))
  }
}
