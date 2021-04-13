import { GiHamburgerMenu } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import { FaHome } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { IoIosNotificationsOutline as NotifIcon } from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';

import UserImagePlaceholder from 'components/UserImagePlaceholder';

import { iconSize as navIconSize } from 'config/nav';

import gamersBackLogo from 'assets/gamers-back-logo.jpg';

import navbarStyles from 'styling/navbar.module.sass';

const {
  containment,
  'navbar-nav': navbarNav,
  'sidebar-icon-containment': sidebarIcon,
  'sidebar-icon-button': sidebarIconButton,
  'site-logo': siteLogo,
  'search-containment': searchContainment,
  'search-component': searchComponent,
  'search-icon': searchIcon,
  'search-input': searchInput,
  'listed-items': listedItems,
  'user-dropdown': userDropdown,
  'greeting-and-addressing-block': greetingAndAddressingBlock,
  'greeting-msg': greetingMsg,
  'addressing-block': addressingBlock,
} = navbarStyles;

function NavbarSearch() {
  return (
    <div className={searchComponent}>
      <GoSearch className={searchIcon} size={navIconSize} />
      <input className={searchInput} type="text" placeholder="Search..." />
    </div>
  );
}

export default function Navbar() {
  return (
    <div className={containment}>
      <nav className={navbarNav}>
        <div className={sidebarIcon}>
          <button className={sidebarIconButton}><GiHamburgerMenu size={navIconSize} /></button>
        </div>
        <span className={siteLogo}>
          <img src={gamersBackLogo} width="200px" height="auto" alt=""/>
        </span>
        <div className={searchContainment}>
          <NavbarSearch />
        </div>
        <ul className={listedItems}>
          <li><button><FaHome size={navIconSize} /></button></li>
          <li><button><TiMessages size={navIconSize} /></button></li>
          <li><button><NotifIcon size={navIconSize} /></button></li>
          <li className={userDropdown}>
            <button><UserImagePlaceholder size="33px" /></button>
            <div className={greetingAndAddressingBlock}>
              <span className={greetingMsg}>Hi,</span>
              <span className={addressingBlock}>Space COWBOY</span>
            </div>
            <button><BsChevronDown size={navIconSize} /></button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
