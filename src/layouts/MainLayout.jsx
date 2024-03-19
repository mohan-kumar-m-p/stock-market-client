import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
        {/* <Header /> */}
        <div
          className="app-wrapper flex-column flex-row-fluid"
          id="kt_app_wrapper"
        >
          {/* <SideMenu /> */}
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <Outlet />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
