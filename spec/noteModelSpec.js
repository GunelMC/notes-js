function testNoteModelText() {
  const note = new NoteModel('test')
  assert.isTrue(note.text === 'test')
}

testNoteModelText()