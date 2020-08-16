import React, { createContext, useState } from "react";

const VisibleSideBar = createContext();

function SideBarProvider({ children }) {
  const [visibleList, setVisibleList] = useState(true);

  function handleToggleSideBar() {
    setVisibleList(!visibleList);
  }

  return (
    <VisibleSideBar.Provider
      value={{
        visibleList,
        handleToggleSideBar,
      }}
    >
      {children}
    </VisibleSideBar.Provider>
  );
}

export { SideBarProvider, VisibleSideBar };
