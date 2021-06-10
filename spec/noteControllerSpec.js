describe('NoteController', () => {
  class noteModelClassDouble {
    constructor(text) {
      this.text = text
    }
  }

  describe('.prototype.addNote()', () => {
    const noteViewDouble = {
      renderNoteList: () => {}
    }

    spyOn(noteViewDouble, 'renderNoteList')

    it('stores an object with the given text', async () => {
      window.localStorage.clear()
      const noteController = new NoteController(noteModelClassDouble, noteViewDouble);
      await noteController.addNote('test')
      expect(noteController.notes[0].text).toBe('test')
    })

    it('calls noteView.renderNoteList() with the stored notes', async () => {
      window.localStorage.clear()
      const noteController = new NoteController(noteModelClassDouble, noteViewDouble);
      await noteController.addNote('test')
      expect(noteViewDouble.renderNoteList).toHaveBeenCalledWithArguments([[{text: 'test'}]])
    })
  })
})
