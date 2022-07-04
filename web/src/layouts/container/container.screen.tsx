import { SlideBarComponent } from "layouts/slide-bar/slide-bar.component";
import React, { createContext } from "react";
import BodyScreen from "./body/body.screen";
import "./container.scss";
import HeaderScreen from "./header/header.screen";
import Modal from "react-modal";

export const ConatinerContext = createContext({});

function ContainerScreen() {
  return (
    <article className="root_container">
      {/* <ConatinerContext.Provider value={{}}> */}
      <SlideBarComponent />
      <div className="root_body">
        <HeaderScreen />
        <BodyScreen />
      </div>

      {/* </ConatinerContext.Provider> */}
    </article>
  );
}

export default ContainerScreen;
