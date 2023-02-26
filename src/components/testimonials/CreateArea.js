import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
      const [note, setNote] = useState({
        content: ""
      });

function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
    };
  });
}

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Testimonial..."
        />
        <Fab onClick={submitNote}>
            <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
