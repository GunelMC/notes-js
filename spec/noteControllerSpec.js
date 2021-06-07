function testNoteControllerClassHasNotesArray() {
  noteController = new NoteController();

  assert.isTrue(JSON.stringify(noteController.notes) == JSON.stringify([]));
}

testNoteControllerClassHasNotesArray();
