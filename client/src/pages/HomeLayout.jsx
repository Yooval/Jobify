import { Outlet } from "react-router-dom";
// A shared layout for public-facing routes like login, register, or landing pages.

const HomeLayout = () => {
  return (
    // we share this navbar acros all pages(all it's children pages now it all)
    <>
      <Outlet />
    </>
  );
};
export default HomeLayout;
