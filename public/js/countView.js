class NoteView {

  constructor(noteListElement) {
    this._noteListElement = noteListElement
  }

  renderNoteList(array) {
    let ul = document.createElement("ul")
    array.forEach(note => {
      let li = document.createElement("li")
      li.append(note.text)
      ul.append(li)
    })  
    this._noteListElement.innerHTML = ul
  }
}

