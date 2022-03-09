import Sub from './Sub';

const SubList = ({ subs, updateSub, deleteSub }) => (
  <>
    {/* { subs.map( s => <Sub key={s.id} id={s.id} title={s.title} />)} */}
    { subs.map( s => 
      <Sub 
        key={s.id} 
        {...s} 
        updateSub={updateSub} 
        deleteSub={deleteSub}
      />
    )}
  </>
)

export default SubList;