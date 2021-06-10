describe('NoteView', () => {
  const noteListElementDouble = document.createElement('div');
  const noteElementDouble = document.createElement('div');
  const noteAdderElementDouble = document.createElement('div');

  describe('.prototype.renderNoteList()', () => {
    it('puts <ul> of notes in the noteListElement', () => {
      const noteView = new NoteView(noteListElementDouble, noteElementDouble, noteAdderElementDouble)
      noteView.renderNoteList([{text: 'test1'}, {text: 'test2'}, {text: 'test3'}])
      expect(noteListElementDouble.innerHTML).toBe('<ul><li><a href="#0">test1</a></li><li><a href="#1">test2</a></li><li><a href="#2">test3</a></li></ul>')
    })
  })
})
