import { useState } from 'react';
import SubForm from './SubForm';
import Topics from '../topics/Topics';

const Sub = ({ id, title, updateSub, deleteSub }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {/* inline styling */}
      <h1 style={{ color: 'teal', fontSize: '34px' }}>{title}</h1>
      {
        editing ?
        <>
          <SubForm 
            id={id}
            title={title}
            updateSub={updateSub}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button 
            onClick={() => setEdit(true)}
            style={styles.btn}
          >
            Edit
          </button>
          <button 
            onClick={() => deleteSub(id)}
            style={styles.deleteBtn}
          >
            Delete
          </button>
          <Topics subId={id} />
        </>
      }
    </>
  )
}
// styling as a module
const styles = {
  btn: {
    background: 'yellow',
    color: 'orange',
    fontSize: '12px',
    borderRadius: '10px',
  },
  deleteBtn: {
    background: 'red',
    color: 'white',
    fontSize: '12px',
    borderRadius: '5px',
  }
}

export default Sub;