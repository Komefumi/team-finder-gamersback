import { FaHome } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

import sidebarStyles from 'styling/sidebar.module.sass';

const {
  containment,
  'sidebar-nav': sidebarNav,
  'list-items': listItems,
} = sidebarStyles;

export default function Sidebar() {
  const size = "1.4em"
  return (
    <div className={containment}>
      <nav className={sidebarNav}>
        <ul className={listItems}>
          <li><FaHome size={size} /></li>
          <li><MdPhotoLibrary size={size} /></li>
          <li><MdVideoLibrary size={size} /></li>
          <li><FaUserCircle size={size} /></li>
        </ul>
      </nav>
    </div>
  );
}