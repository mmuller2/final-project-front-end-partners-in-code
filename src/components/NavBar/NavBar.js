import {
  PhoneIcon,
  HamburgerIcon,
  StarIcon,
  InfoIcon,
  InfoOutlineIcon,
  SearchIcon,
  SunIcon,
  EmailIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
          _hover={{ bgColor: 'color.mintgreen' }}
        />
        <MenuList>
          <MenuItem icon={<StarIcon />} _hover={{ bgColor: 'color.mintgreen' }}>
            Profile
          </MenuItem>
          <Link to="/">
            <MenuItem
              icon={<ArrowForwardIcon />}
              _hover={{ bgColor: 'color.mintgreen' }}
            >
              Homepage
            </MenuItem>
          </Link>
          <Link to="/items">
            <MenuItem
              icon={<SearchIcon />}
              _hover={{ bgColor: 'color.mintgreen' }}
            >
              {' '}
              Browse
            </MenuItem>
          </Link>
          <Link to="/community-guidelines">
            <MenuItem
              icon={<InfoIcon />}
              _hover={{ bgColor: 'color.mintgreen' }}
            >
              {' '}
              Community Guidelines
            </MenuItem>
          </Link>
          <Link to="/sustainability">
            <MenuItem
              icon={<SunIcon />}
              _hover={{ bgColor: 'color.mintgreen' }}
            >
              Sustainability
            </MenuItem>
          </Link>
          <MenuItem
            icon={<EmailIcon />}
            _hover={{ bgColor: 'color.mintgreen' }}
          >
            Volunteer
          </MenuItem>
          <Link to="/about-us">
            <MenuItem
              icon={<InfoOutlineIcon />}
              _hover={{ bgColor: 'color.mintgreen' }}
            >
              About Us
            </MenuItem>
          </Link>
          <MenuItem
            icon={<PhoneIcon />}
            _hover={{ bgColor: 'color.mintgreen' }}
          >
            Contact Us
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
