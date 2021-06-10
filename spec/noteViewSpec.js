
const noteDivMock = document.createElement('div');
const noteView = new NoteView(noteDivMock)

function testViewRender() {
  const noteView = new NoteView(["yes","no","maybe"])
  assert.isTrue(noteView.renderNoteList() === "yes")
}

it("should display all notes in inner html", function() {
  noteView.renderNoteList([{text:"hi"}])
  expect(noteDivMock.innerHTML).toEqual(`<ul><li><a href="#0">hi</a></li></ul>`)
})

it("should create an instance of noteView", function() {
  expect(noteView).toBeInstanceOf(NoteView)
})