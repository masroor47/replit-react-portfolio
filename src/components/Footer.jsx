import { Link } from 'react-router-dom';
import navLinks from '../data/navLinks';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-cyan-900">
      <ul className="flex flex-col items-center p-2 sm:flex-row">
        {navLinks.map(link => (
          <li key={link.title} className="p-2 text-gray-300 transition ease-in-out delay-150 duration-500 hover:text-slate-100">
            <Link className="" to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-400 p-1">Masroor © 2023. All rights reserved I guess</p>
    </footer>
  );
}

export default Footer;