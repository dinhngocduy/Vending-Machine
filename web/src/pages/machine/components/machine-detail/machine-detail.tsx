import LoadingSpinnerScreen from "libraries/components/loading-spinner/loading-spinner.screen";
import { SearchEmpty } from "libraries/icons/icon";
import { useEffect } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { MachineAdversement } from "./components/machine-advertisement/machine-advertisement";
import { MachineInfo } from "./components/machine-info/machine-info";
import { MachineLogComponent } from "./components/machine-log/machine-log";
import { ProductMappingScreen } from "./components/product-mapping/product-mapping.screen";
import { TabSelector } from "./components/tab-bar/tabbar-selector";
import { MachineDetailAdapter } from "./machine-detail.adapter";
import { MachineDetailProps } from "./machine-detail.props";
import "./machine-detail.scss";
export const MachineDetails = (props: MachineDetailProps) => {
  const { selectedTab, setSelectedTab, machine, loading } =
    MachineDetailAdapter(props);

  return (
    <>
      {loading ? (
        <div className="loading-ctn">
          <LoadingSpinnerScreen className="big" />
        </div>
      ) : (
        <>
          {machine ? (
            <div className="machine-detail-ctn">
              <nav className="machine-detail-tabbar">
                <TabSelector
                  isActive={selectedTab === "machineinfo"}
                  onClick={() => setSelectedTab("machineinfo")}
                >
                  Giới thiệu
                </TabSelector>
                <TabSelector
                  isActive={selectedTab === "productmapping"}
                  onClick={() => setSelectedTab("productmapping")}
                >
                  Sản phẩm
                </TabSelector>
                <TabSelector
                  isActive={selectedTab === "advertisement"}
                  onClick={() => setSelectedTab("advertisement")}
                >
                  Quảng cáo
                </TabSelector>
                <TabSelector
                  isActive={selectedTab === "log"}
                  onClick={() => setSelectedTab("log")}
                >
                  File Log
                </TabSelector>
              </nav>
              <div className="machine-detail-content">
                <TabPanel
                  hidden={selectedTab !== "machineinfo"}
                  style={{ height: "100%" }}
                >
                  <MachineInfo item={machine} />
                </TabPanel>
                <TabPanel
                  hidden={selectedTab !== "productmapping"}
                  style={{ height: "100%" }}
                >
                  <ProductMappingScreen machine={machine} />
                </TabPanel>
                <TabPanel
                  hidden={selectedTab !== "advertisement"}
                  style={{ height: "100%" }}
                >
                  <MachineAdversement machine={machine} />
                </TabPanel>
                <TabPanel
                  hidden={selectedTab !== "log"}
                  style={{ height: "100%" }}
                >
                  <MachineLogComponent />
                </TabPanel>
              </div>
            </div>
          ) : (
            <div className="empty-machine">
              <SearchEmpty />
            </div>
          )}
        </>
      )}
    </>
  );
};
