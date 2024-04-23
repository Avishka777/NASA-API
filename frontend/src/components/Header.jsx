import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Header() {
  return (

    <Navbar className='shadow-lg'>
      <Navbar.Toggle className='ml-3' />

      <Navbar.Brand className='ml-20'>
        <img src={logo} className="mr-3 h-16 sm:h-16" alt="Company Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">NASA API</span>
      </Navbar.Brand>

      <div className="flex md:order-2 mr-20">
        <Button className='w-14 h-10 hidden sm:inline mr-5' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>Sign In</Button>
        </Link> 
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/">HOME</Navbar.Link>
        <Navbar.Link href="/astronomy">ASTRONOMY PICTURES</Navbar.Link>
        <Navbar.Link href="/mars">MARS ROVER</Navbar.Link>
        <Navbar.Link href="/more">MORE</Navbar.Link>
      </Navbar.Collapse>

    </Navbar>
  );
}