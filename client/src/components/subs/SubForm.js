import { useState, useEffect } from 'react';

const SubForm = ({ addSub, id, title, updateSub, setEdit }) => {
  const [sub, setSub] = useState({ title: '' })

  // prepop the form
  useEffect( () => {
    if (id) {
      // setSub({ title: title })
      setSub({ title })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      // for updating a sub
      updateSub(id, sub)
      setEdit(false)
    } else {
      // for creating a sub
      // { title: 'Food' }
      addSub(sub)
    }
    // clearing out the form 
    setSub({ title: '' })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='title' 
          value={sub.title} 
          onChange={ (e) => setSub({ ...sub, title: e.target.value })} 

          placeholder='Title'
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SubForm;



















