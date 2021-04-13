import classnames from 'classnames';

import { FaHome } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

import SidebarProps from 'types/SidebarProps';

import { iconSize as navIconSize } from 'config/nav';

import sidebarStyles from 'styling/sidebar.module.sass';

const {
  containment,
  'sidebar-nav': sidebarNav,
  'list-items': listItems,
  'is-closed': isClosedStyles,
} = sidebarStyles;

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div className={classnames([containment, !isOpen && isClosedStyles])}>
      <nav className={sidebarNav}>
        <ul className={listItems}>
          <li><button><FaHome size={navIconSize} /></button></li>
          <li><button><MdPhotoLibrary size={navIconSize} /></button></li>
          <li><button><MdVideoLibrary size={navIconSize} /></button></li>
          <li><button><FaUserCircle size={navIconSize} /></button></li>
        </ul>
      </nav>
    </div>
  );
}