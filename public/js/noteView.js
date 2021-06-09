class NoteView {

  constructor(noteListElement, noteElement, noteAdderElement) {
    this._noteListElement = noteListElement
    this._noteElement = noteElement
    this._noteAdderElement = noteAdderElement
  }

  renderNoteList(array) {
    let ul = document.createElement("ul")
    array.forEach(note => {
      let li = document.createElement("li")
      let a = document.createElement("a")
      a.href = `#${array.indexOf(note)}`
      li.append(a)
      a.append(note.text.slice(0, 20))
      ul.append(li)
    })
    this._noteListElement.innerHTML = ''
    this._noteListElement.append(ul)
  }

  renderNote(note) {
    this._noteAdderElement.hidden = true
    this._noteListElement.hidden = true
    let p = document.createElement("p")
    p.innerHTML = note.text
    this._noteElement.append(p)
  }
}

