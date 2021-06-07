function testNoteControllerClassHasNotesArray() {
  noteController = new NoteController();

  assert.isTrue(JSON.stringify(noteController.notes) == JSON.stringify([]));
}
testNoteControllerClassHasNotesArray();

function testNoteControllerAddNote() {
  class countModelClassDouble {
    constructor(text) {
      this.text = text
    }
  }
  noteController = new NoteController(countModelClassDouble);
  noteController.addNote('test')

  assert.isTrue(noteController.notes[0].text === 'test')
}
testNoteControllerAddNote()