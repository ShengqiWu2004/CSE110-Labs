import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import {ClickCounter} from "./heartButton"
import 'font-awesome/css/font-awesome.min.css' // For the Heart Button
function App() {
  const [notes,setNotes] = useState(dummyNotesList) ;
  const handleLikeClick = (noteId: number) => {
    // flip favorate
    setNotes(notes => 
      notes.map(note => 
        note.id === noteId ? { ...note, favorite: !note.favorite } : note
      )
    );
  };
  const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
  };
 const [createNote, setCreateNote] = useState(initialNote);
 return (
   <div className='app-container'>
    <form className="note-form">
       <div><input placeholder="Note Title"></input></div>

       <div><textarea placeholder='Note Content'></textarea></div>
       <select name = "label" id = "label">
                <option value = "Personal">Personal</option>
                <option value = "Work">Work</option>
                <option value = "Study">Study</option>
                <option value = "Other">Other</option>
        </select>

       <div><button type="submit">Create Note</button></div>
    </form>
    <div className="notes-grid">
       {notes.map((note) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
           <button onClick={()=>handleLikeClick(note.id)}> 
            <i className = "fa fa-heart" style = {{color: note.favorite ? 'red' : '#D3D3D3'}}/> 
            </button>
             <button>x</button>
           </div>
           <h2> {note.title} </h2>
           <p> {note.content} </p>
           <p> {note.label} </p>
         </div>
       ))}
     </div>
     <div className='like-list'>
       <h2>List of Favorites</h2>
       {notes.map((note)=>(
        <p>{note.favorite?note.title:''}</p>
       ))}
     </div>
   </div>
 );
}

export default App;