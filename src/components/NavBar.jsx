import { Link } from 'react-router-dom';
import navLinks from '../data/navLinks';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-red-300">

      <div className="ml-2"><Link to="/">LOGO</Link></div>

      <ul className="flex">
        {navLinks.map(link => (
          <li key={link.title} className="p-2 transition ease-in-out delay-50 duration-300 hover:text-slate-200">
            <Link className="" to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav >
  );
}

export default NavBar;