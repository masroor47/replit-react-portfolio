import ListItem from './ListItem'

const ListComponent = ({ listItems }) => {
  return (
    <div className="flex flex-col items-center">
      {listItems.map(item => (
        <ListItem key={item.name} item={item} />
      ))}
    </div>
  )
}

export default ListComponent