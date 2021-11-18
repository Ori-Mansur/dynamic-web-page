import index from ".";


function MyTabs({ block, callback }) {
  return (
    <div >
      <h3>
        {block.title}
      </h3>
      <div>
        {block?.components?.length ? block.components.map(cmp => index(cmp, null, callback)) : ''}
      </div>

    </div>
  );
}

export default MyTabs;