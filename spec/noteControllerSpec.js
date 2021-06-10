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
    this.numOfCalls++; 
  }
}

function testNoteControllerClassHasNotesArray() {
  window.localStorage.clear()
  noteController = new NoteController(noteModelClassDouble, noteViewDouble);
  assert.isTrue(JSON.stringify(noteController.notes) == JSON.stringify([]));
}
testNoteControllerClassHasNotesArray();

function testNoteControllerAddNote() {
  const noteViewDouble = {
    saved_args: null,
    numOfCalls: 0,
    renderNoteList: function(list) {
      this.saved_args = list;
      this.numOfCalls ++;}} 

  noteController = new NoteController(noteModelClassDouble, noteViewDouble);
  noteController.addNote('test')
  setTimeout( function (){
  assert.isTrue(noteController.notes[0].text === 'test')
  assert.isTrue(noteViewDouble.numOfCalls === 2)
  assert.isTrue(noteViewDouble.saved_args === noteController.notes)}, 1000)
}
testNoteControllerAddNote()