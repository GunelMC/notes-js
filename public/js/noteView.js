class NoteView {

  constructor(noteListElement) {
    this._noteListElement = noteListElement
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
     let p = document.createElement("p")
     p.innerHTML = note.text
    this._noteListElement.append(p)
   }
}

