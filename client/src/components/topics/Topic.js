import { useState } from 'react';
import TopicForm from './TopicForm';

const Topic = ({ id, title, body, fav, updateTopic, deleteTopic }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      {
        editing ?
          <>
            <TopicForm
              id={id}
              title={title}
              body={body}
              updateTopic={updateTopic}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        :
        <>
          <h1>Title: {title}</h1>
          <p>{body}</p>
          <p>Favorite: {fav ? "☆ favorite" : "x not favorite"}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteTopic(id)}>Delete</button>
        </>
      }
    </>
  )
}

export default Topic;