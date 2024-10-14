import React, { useState, useEffect, useContext } from 'react';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import 'font-awesome/css/font-awesome.min.css' // For the Heart Button

export const StickyNotes = () =>{
const [notes,setNotes] = useState(dummyNotesList) ;
  const [noteCount, setNoteCount] = useState(7);
  const handleLikeClick = (noteId: number) => {
    // flip favorate
    setNotes(notes => 
      notes.map(note => 
        note.id === noteId ? { ...note, favorite: !note.favorite } : note
      )
    );
  };
  const handleDeleteClick = (noteId: number) => {
    // flip favorate
    setNotes(notes => 
      notes.filter(note => 
        note.id != noteId 
      )
    );
  };
  const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
    favorite: false,
  };
 const [createNote, setCreateNote] = useState(initialNote);
 const [bc,setBc] = useState('');
 const [cbc,setCbc] = useState('');
 const createNoteHandler=(e:React.FormEvent)=>{
  e.preventDefault();
  setNoteCount(noteCount+1);
  const newNote = {...createNote, id: noteCount as number}
  setNotes([...notes,newNote]);
  setCreateNote(initialNote);
 }
 const [theme,setTheme] = useState(false);
 const toggleTheme = ()=>{
  setTheme(prevTheme => !prevTheme);
 };
 useEffect(()=>{
  document.body.style.backgroundColor = theme ? '#222': 'lightgray';
 },[theme]);
 return (
  <div className='app-container'
  style={{
    backgroundColor: theme ? '#222' : 'lightgray',
    color: theme ? '#fff' : '#000',
  }}>
  <form className="note-form" onSubmit={(e)=>createNoteHandler(e)}>
    <div>
      <input
        placeholder="Note Title" value = {createNote.title}
        style = {{backgroundColor: bc}}
        onFocus= {()=>(setBc('#e0f7fa'))}
        onBlur = {()=>(setBc(''))}
        onChange={(event) =>
          setCreateNote({ ...createNote, title: event.target.value })}
        required>
      </input>
    </div>

    <div>
      <textarea placeholder = "Note Content" value = {createNote.content}
        style = {{backgroundColor: cbc}}
        onFocus= {()=>(setCbc('#e0f7fa'))}
        onBlur = {()=>(setCbc(''))}
        onChange={(event) =>
          setCreateNote({ ...createNote, content: event.target.value })}
        required>
      </textarea>
    </div>

    <div>
     <select value = {createNote.label}
       onChange={(event) =>
         setCreateNote({ ...createNote, label: event.target.value as Label})}
       required>
       <option value={Label.personal}>Personal</option>
       <option value={Label.study}>Study</option>
       <option value={Label.work}>Work</option>
       <option value={Label.other}>Other</option>
     </select>
    </div>

    <div><button type="submit">Create Note</button></div>
    </form>
    <div className="notes-grid">
       {notes.map((note) => (
         <div
           key={note.id}
           className="note-item"
           style={{
            backgroundColor: theme ? 'darkgray' : 'white',
            color: theme ? '#fff' : 'black',
          }}>
           <div className="notes-header">
           <button onClick={()=>handleLikeClick(note.id)}> 
            <i className = "fa fa-heart" style = {{color: note.favorite ? 'red' : '#D3D3D3'}}/> 
            </button>
             <button onClick={()=>handleDeleteClick(note.id)}>x</button>
           </div>
           <h2 contentEditable="true"> {note.title} </h2>
           <p contentEditable="true"> {note.content} </p>
           <p contentEditable="true"> {note.label} </p>
         </div>
       ))}
     </div>
     <div className='Toggle-Theme'>
      <button onClick={toggleTheme}>Toggle Theme</button>
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