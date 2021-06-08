function testNoteModelText() {
  const note = new noteModel('test')
  assert.isTrue(note.text === 'test')
}

testNoteModelText()