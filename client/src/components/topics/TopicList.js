import Topic from './Topic';

const TopicList = ({ topics }) => (
  <>
    { topics.map( t => 
      <Topic 
        key={t.id}
        // id={t.id} title={t.title} body={t.body}
        {...t}
      />
    )}
  </>
)

export default TopicList;