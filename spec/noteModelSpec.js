describe('NoteModel', () => {
  it('has a text property', () => {
    const noteModel = new NoteModel('Hello, World!')
    expect(noteModel.text).toBe('Hello, World!')
  })
})