import React from "react";

import HeaderV1 from "./header/header-v1";

const handleNavbar = () => {
  return (
    <>
      <HeaderV1 />
    </>
  );
};
function Layout() {
  handleNavbar();
}

export default Layout;
