import navbarStyles from 'styling/navbar.module.sass';

const {
  containment,
  'navbar-nav': navbarNav,
  'sidebar-icon': sidebarIcon,
  'site-logo': siteLogo,
  'search-containment': searchContainment,
  'listed-items': listedItems,
} = navbarStyles;

export default function Navbar() {
  return (
    <div className={containment}>
      <nav className={navbarNav}>
        <span className={sidebarIcon} />
        <span className={siteLogo} />
        <div className={searchContainment}>
          <input type="text" placeholder="Search..." />
        </div>
        <ul className={listedItems}>
          <li>Home</li>
          <li>Messages</li>
          <li>Notification</li>
          <li>Pfp</li>
          <li>Dropdown with a hi and my name</li>
        </ul>
      </nav>
    </div>
  );
}
