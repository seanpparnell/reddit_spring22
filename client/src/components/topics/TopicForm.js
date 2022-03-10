import { useState } from 'react';

const TopicForm = ({ addTopic }) => {
  const [topic, setTopic] = useState({ title: '', body: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addTopic(topic)
    setTopic({ title: '', body: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          // type="number"
          name="title" 
          value={topic.title}
          onChange={(e) => setTopic({ ...topic, title: e.target.value })}
          required
          placeholder='title'
        />
        <label>Body:</label>
        <textarea
          name="body"
          value={topic.body}
          onChange={(e) => setTopic({ ...topic, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TopicForm;