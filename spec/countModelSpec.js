function testNoteModelText() {
  const note = new Note('test')
  assert.isTrue(note.text === 'test')
}

testNoteModelText()