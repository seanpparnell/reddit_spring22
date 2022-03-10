
import { useState, useEffect } from 'react';
import axios from 'axios';
import TopicForm from './TopicForm';
import TopicList from './TopicList';
import { useLocation, useParams } from 'react-router-dom';

// const Topics = ({ subId }) => {
const Topics = ({}) => {
  const [topics, setTopics] = useState([])
  // if you want to grab the id from the link state then:
  const location = useLocation();
  const { subId, subTitle } = location.state

  // is you want to grab the id from the url then
  // const { subId,  } = useParams()

  useEffect( () => {
    axios.get(`/api/subs/${subId}/topics`)
      .then( res => setTopics(res.data) )
      .catch( err => console.log(err))
  }, [])

  // create
  const addTopic = (topic) => {
    axios.post(`/api/subs/${subId}/topics`, { topic })
    .then( res => setTopics([...topics, res.data]) )
    .catch( err => console.log(err))
  }

  // update 
  const updateTopic = (id, topic) => {
    axios.put(`/api/subs/${subId}/topics/${id}`, { topic })
      .then( res => {
        const newUpdatedTopics = topics.map( t => {
          if (t.id === id) {
            return res.data 
          }
          return t
        })
        setTopics(newUpdatedTopics)
      })
      .catch( err => console.log(err))
  }

  // destroy
  const deleteTopic = (id) => {
    axios.delete(`/api/subs/${subId}/topics/${id}`)
      .then( res => {
        setTopics( topics.filter( t => t.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Sub: {subTitle}</h1>
      <h3>Topics</h3>
      <TopicForm addTopic={addTopic} />
      <TopicList
        topics={topics}
        updateTopic={updateTopic}
        deleteTopic={deleteTopic}
      />
    </>
  )
}

export default Topics;