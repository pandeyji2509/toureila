import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import './testimonial.css'
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            content={noteItem.content}
            img={"https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-valentines-day-background-valentines-day-elements-sweet-confession-image_46114.jpg"}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
