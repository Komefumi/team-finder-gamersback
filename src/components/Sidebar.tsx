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
          <li><button><FaHome size={size} /></button></li>
          <li><button><MdPhotoLibrary size={size} /></button></li>
          <li><button><MdVideoLibrary size={size} /></button></li>
          <li><button><FaUserCircle size={size} /></button></li>
        </ul>
      </nav>
    </div>
  );
}