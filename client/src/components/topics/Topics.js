import { useState, useEffect } from 'react';
import axios from 'axios';
import TopicForm from './TopicForm';
import TopicList from './TopicList';

const Topics = ({ subId }) => {
  const [topics, setTopics] = useState([])

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

  // destroy

  return (
    <>
      <h3>Topics</h3>
      <TopicForm addTopic={addTopic} />
      <TopicList
        topics={topics}
      />
    </>
  )
}

export default Topics;








