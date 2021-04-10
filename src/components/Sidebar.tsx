import sidebarStyles from 'styling/sidebar.module.sass';

const {
  containment,
  'sidebar-nav': sidebarNav,
  'list-items': listItems,
} = sidebarStyles;

export default function Sidebar() {
  return (
    <div className={containment}>
      <nav className={sidebarNav}>
        <ul className={listItems}>
          <li>Item A</li>
          <li>Item B</li>
          <li>Item C</li>
          <li>Item D</li>
        </ul>
      </nav>
    </div>
  );
}