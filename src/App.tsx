import { useState } from 'react';

import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import ContentArea from 'components/ContentArea';

import 'styling/main.sass';

import main from 'styling/main.module.sass';
const { 'sidebar-and-content-wrapper': sidebarAndContentWrapper } = main;

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const sidebarToggler = () => { setSidebarIsOpen(!sidebarIsOpen); }
  return (
    <div className={main.app}>
      <Navbar sidebarToggler={sidebarToggler} />
      <div className={sidebarAndContentWrapper}>
        <Sidebar isOpen={sidebarIsOpen} />
        <ContentArea sidebarOpen={sidebarIsOpen} />
      </div>
    </div>
  );
}

export default App;
