function testNoteControllerClassHasNotesArray() {
  noteController = new NoteController();

  assert.isTrue(JSON.stringify(noteController.notes) == JSON.stringify([]));
}
testNoteControllerClassHasNotesArray();

function testNoteControllerAddNote() {
  class noteModelClassDouble {
    constructor(text) {
      this.text = text
    }
  }
  const noteViewDouble = {
    saved_args: null,
    numOfCalls: 0,
    renderNoteList: function(list) {
      this.saved_args = list;
      this.numOfCalls ++; 
    }
  }

  noteController = new NoteController(noteModelClassDouble, noteViewDouble);
  noteController.addNote('test')

  assert.isTrue(noteController.notes[0].text === 'test')
  assert.isTrue(noteViewDouble.numOfCalls === 1)
  assert.isTrue(noteViewDouble.saved_args === noteController.notes)
}
testNoteControllerAddNote()