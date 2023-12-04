import { useState } from 'react';
import './App.css';




function App() {
  const [note, setNote] = useState("")
  const [notes, setNotes] = useState([])
  const [newNote, setnewNote] = useState("")
  const [id, setId] = useState(null)
  const [active, setActive] = useState(Boolean)

  let inputadd = document.querySelector(".inputNotes")

  const addNote = (e)=>{
    e.preventDefault()
      setNotes([...notes, note])
      setNote("")
      console.log(notes)
      inputadd.value = ""
  }
 
  const openUpdateMenu = (index)=>{
    setId(index)
    setActive( true )
    setnewNote(notes[index])
  } 

  const setFavoriteState = (index)=>{
    notes[index].favoriteState = !(notes[index].favoriteState)
    setNotes([...notes])
  }
  const removeNote = index =>{
    const updateNotes = notes.filter((_,i) => i != index)
    setNotes(updateNotes)
    console.log(index)
  }
  const confirmUpdateNote = ()=>{
    notes.splice(id, 1, newNote)
    setnewNote("")
    setActive(!active)
 }
  return (
    <div className="noteList">
      <h1>Agregar Notas </h1>
      <form onSubmit={addNote}>
        <input type="text"
        className='inputNotes'
     
        onChange={ e=>{
          setNote({ note:e.target.value, favoriteState:false })
        }} />
        <button type="submit">Agregar nota</button>
      </form>
      <h1>Lista de notas:</h1>

      <ul>
        {   notes.map( (item, index) => (
            <li key={index}> {item.note} | {item.favoriteState}
              <button className="remove" onClick={()=>removeNote(index)}>Remove</button>
              <button className={ notes[index].favoriteState ? "favorite active" : "favorite" } onClick={()=> setFavoriteState(index) }>Agregar a favoritos</button>
              <button className="edit" onClick={()=>openUpdateMenu(index)}>Actualizar</button>
              
    
            </li> 
        ))}
      </ul>

        {/* UPDATE MENU */}
      <div className={active ? "updateMenu active" : "updateMenu"}>
        <h1>Update your Note</h1>
        <div className='updateModal'>
          <input className='updateInput' type="text" value={newNote.note}  onChange={e=> setnewNote({note:e.target.value, favoriteState:notes[id].favoriteState})}/>
          
          <button className='updateButton' onClick={()=> confirmUpdateNote()}>Actualizar</button>
        
        </div>
      </div>
    </div>
  );
}
export default App;