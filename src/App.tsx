import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import ContentArea from 'components/ContentArea';

import main from 'styling/main.module.sass';
const { 'sidebar-and-content-wrapper': sidebarAndContentWrapper } = main;

function App() {
  return (
    <div className={main.app}>
      <Navbar />
      <div className={sidebarAndContentWrapper}>
        <Sidebar />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
