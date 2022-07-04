import React, { createContext, Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { ENUM_PAGE } from "libraries/enums/page";
import "./body.scss";
import useWindowSize from "libraries/hooks/useWindowSize";
import { ENUM_CONSTANT_NUMBER } from "libraries/enums/constant";
import BlurLoadingScreen from "libraries/components/blur-loading/blur-loading.screen";
import ErrorBoundary from "libraries/components/error-boundary/error-boundary.screen";
import DashboardV2 from "pages/dashboard/dashboard";
import MachineScreen from "pages/machine/machine";
import { JobsScreen } from "pages/jobs/jobs.screen";
import { ProductScrren } from "pages/product/product.screen";
import { HistoryScreen } from "pages/history/history.screen";
import { ReportScreen } from "pages/report/report.screen";
import { AdminScreen } from "pages/admin/admin.screen";
import { ReportOverView } from "pages/report/overview/report-overview.screen";

export const BodyContext = createContext({
  heightToFull: 0,
});

// const DashboardScreen = lazy(() => import('pages/dashboard/dashboard.screen'));
// const AdminScreen = lazy(() => import('pages/admin/admin.screen'));
// const OperationsScreen = lazy(() => import('pages/operations/operations.screen'));
// const ReportsScreen = lazy(() => import('pages/reports/reports.screen'));

function BodyScreen() {
  const { width, height } = useWindowSize();

  return (
    <div className="body">
      <BodyContext.Provider
        value={{
          heightToFull: height - ENUM_CONSTANT_NUMBER.HEIGHT_HEADER,
        }}
      >
        <ErrorBoundary>
          <Suspense fallback={<BlurLoadingScreen></BlurLoadingScreen>}>
            <Route path={ENUM_PAGE.DASHBOARD} exact>
              <DashboardV2 />
            </Route>
            <Route path={ENUM_PAGE.JODS} exact>
              <JobsScreen />
            </Route>
            <Route path={ENUM_PAGE.MACHINE} exact>
              <MachineScreen />
            </Route>
            <Route path={ENUM_PAGE.MACHINE + "/:id"} exact>
              <MachineScreen />
            </Route>
            <Route path={ENUM_PAGE.PRODUCT} exact>
              <ProductScrren />
            </Route>
            <Route path={ENUM_PAGE.HISTORY} exact>
              <HistoryScreen />
            </Route>
            <Route path={ENUM_PAGE.REPORT_OVERVIEW} exact>
              {/* <ReportScreen /> */}
              <ReportOverView />
            </Route>
            <Route path={ENUM_PAGE.ADMIN} exact>
              <AdminScreen />
            </Route>
          </Suspense>
        </ErrorBoundary>
      </BodyContext.Provider>
    </div>

    /// --------------
  );
}

export default BodyScreen;
