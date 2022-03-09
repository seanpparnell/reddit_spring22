import { useState } from 'react';
import SubForm from './SubForm';

const Sub = ({ id, title, updateSub }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1>{title}</h1>
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
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      }
    </>
  )
}

export default Sub;