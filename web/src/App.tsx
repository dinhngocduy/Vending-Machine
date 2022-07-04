import { AppAdapter } from "app.adapter";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerScreen from "layouts/container/container.screen";
import LossNetworkModalScreen from "libraries/components/loss-network-modal/loss-network-modal.screen";
import ToastifyScreen from "libraries/components/toastify/toastify.screen";
import { ENUM_PAGE } from "libraries/enums/page";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.scss";
import LoginV2 from "./pages/login/login";

function App() {
  
  const {} = AppAdapter()



  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={ENUM_PAGE.DASHBOARD} component={ContainerScreen} />
          <Route path={ENUM_PAGE.JODS} component={ContainerScreen}></Route>
          <Route path={ENUM_PAGE.MACHINE} component={ContainerScreen}></Route>
          <Route
            path={ENUM_PAGE.MACHINE + "/:id"}
            component={ContainerScreen}
          ></Route>
          <Route path={ENUM_PAGE.PRODUCT} component={ContainerScreen}></Route>
          <Route path={ENUM_PAGE.HISTORY} component={ContainerScreen}></Route>
          <Route path={ENUM_PAGE.REPORTS} component={ContainerScreen}></Route>
          <Route path={ENUM_PAGE.ADMIN} component={ContainerScreen}></Route>
          <Route path="/" component={LoginV2} />
        </Switch>
      </BrowserRouter>

      <ToastifyScreen></ToastifyScreen>
      <LossNetworkModalScreen></LossNetworkModalScreen>
    </>
  );
}

export default App;
