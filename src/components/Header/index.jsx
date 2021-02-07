import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';

import { Wrapper } from './styles';
import { openSidebar } from '../Sidebar/sidebarSlice';

function Header() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button onClick={() => dispatch(openSidebar())}>
        <AiOutlineMenu size={35} fill="#fff" />
      </button>
      <button>
        <Link to="/carrinho">
          <BiCart size={35} fill="#fff" />
        </Link>
      </button>
    </Wrapper>
  );
}

export default Header;
