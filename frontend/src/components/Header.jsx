import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import logo from '../assets/logo.png';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex'>
        <img src={logo} className="mr-3 h-16 sm:h-16" alt="Company Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-serif">NASA API</span>
      </Link>

      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-14 h-12  mr-4 sm:inline rounded-lg'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='pinkToOrange' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'} style={{ color: path === "/" ? "#C12c2e" : "#2c4ac1" }} className='text-lg'>
          <Link to='/'>HOME</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/astronomy'} as={'div'} style={{ color: path === "/astronomy" ? "#C12c2e" : "#2c4ac1" }} className='text-lg'>
          <Link to='/astronomy'>ASTRONOMY</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/mars'} as={'div'} style={{ color: path === "/mars" ? "#C12c2e" : "#2c4ac1" }} className='text-lg'>
          <Link to='/mars'>MARS</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/more'} as={'div'} style={{ color: path === "/more" ? "#C12c2e" : "#2c4ac1" }} className='text-lg' >
          <Link to='/more'>MORE</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}