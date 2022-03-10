import Topic from './Topic';

const TopicList = ({ topics, updateTopic, deleteTopic }) => (
  <>
    { topics.map( t => 
      <Topic 
        key={t.id}
        // id={t.id} title={t.title} body={t.body}
        {...t}
        fav={false}
        updateTopic={updateTopic}
        deleteTopic={deleteTopic}
      />
    )}
  </>
)

export default TopicList;