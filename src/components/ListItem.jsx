import { Link } from 'react-router-dom';

const ListItemComponent = ({ item }) => {

  return (
    // <Link to={"/projects/" + item.name.replaceAll(" ", "_").toLowerCase()}>
    <Link to={"/projects/" + item.name}>
      <div className="p-6 my-4 w-72 border-slate-600 border-2 rounded-lg" >
        <h1 className="text-center font-semibold">{item.name}</h1>
        <h1 className="text-center font-semibold">{item.author}</h1>
        <p className="font-semibold">{item.description}</p>
      </div >
    </Link >
  )
}

export default ListItemComponent