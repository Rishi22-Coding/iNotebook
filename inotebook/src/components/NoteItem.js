import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fas fa-trash mx-2" onClick={()=>{deleteNote(note._id);
                    props.showAlert("Deleted Successfully", "warning");}}></i>
                    <i className="fas fa-user-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
