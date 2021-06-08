
const noteDivMock = {};
const noteView = new NoteView(noteDivMock)

function testViewRender() {
  const noteView = new NoteView(["yes","no","maybe"])
  assert.isTrue(noteView.renderNoteList() === "yes")
}

it("creates a new noteview object", function() {
  expect(noteView).toEqual(new NoteView)
})



it("should display all notes in inner html", function() {
  noteView.renderNoteList(2)
  expect(noteDivMock.innerHTML).toEqual(2)
})
