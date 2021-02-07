import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Nav, Panel } from './styles';
import { selectIsOpen, closeSidebar } from './sidebarSlice';
import logo from '../../images/logo.jpg';

function Sidebar() {
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <Nav isOpen={isOpen}>
        <img src={logo} alt="logo" />
        <NavLink to="/" onClick={() => dispatch(closeSidebar())}>
          Ofertas
        </NavLink>
        <NavLink to="/bovinos" onClick={() => dispatch(closeSidebar())}>
          Bovinos
        </NavLink>
        <NavLink to="/suinos" onClick={() => dispatch(closeSidebar())}>
          Suínos
        </NavLink>
        <NavLink to="/avinos" onClick={() => dispatch(closeSidebar())}>
          Avinos
        </NavLink>
        <NavLink to="/bebidas" onClick={() => dispatch(closeSidebar())}>
          Bebidas
        </NavLink>
        <NavLink to="/acessorios" onClick={() => dispatch(closeSidebar())}>
          Acessórios para churrasco
        </NavLink>
        <NavLink to="/sobre" onClick={() => dispatch(closeSidebar())}>
          Quem somos?
        </NavLink>
      </Nav>
      <Panel isOpen={isOpen} onClick={() => dispatch(closeSidebar())} />
    </div>
  );
}

export default Sidebar;
