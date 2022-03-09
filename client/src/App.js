import { useState, useEffect } from 'react';
import axios from 'axios';
import SubForm from './components/subs/SubForm';
import SubList from './components/subs/SubList';

const App = () => {
  const [subs, setSubs] = useState([])

  useEffect( () => {
    // make a call to our rails to grab all items
    axios.get('/api/subs')
      .then( res => {
        // update the state with the items from the database
        setSubs(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

          // { title: 'Food' }
  const addSub = (sub) => {
    // TODO make a call to our rails to create the item using the params
                    // { sub: { title: 'Food' }}
    axios.post('/api/subs', { sub })
      .then( res => {
        // add the new sub in our state
        setSubs([...subs, res.data ])
      })
      .catch( err => console.log(err) )
  }

  const updateSub = (id, sub) => {
    // TODO make a call to our rails to updating the item using the params
    axios.put(`/api/subs/${id}`, { sub })
    // TODO update the state
      .then( res => {
        const newUpdatedSubs = subs.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setSubs(newUpdatedSubs)
      })
      .catch( err => console.log(err) )
  }

  const deleteSub = (id) => {
    // TODO make a call to our rails to delete the item
    axios.delete(`/api/subs/${id}`)
      .then(res => {
        // TODO delete item in the state, display message 
        setSubs(subs.filter( s => s.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  return(
    <>
      <h1>Subs</h1>
      <SubForm addSub={addSub} />
      <SubList 
        subs={subs}
        updateSub={updateSub}
        deleteSub={deleteSub}
      />
    </>
  )
}

export default App;









