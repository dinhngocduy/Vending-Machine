import { IReport } from "libraries/types/report";
import { useEffect, useState } from "react";
import { ReportAdapter } from "vending-core/model-report/report.adapter";

export const ReportHeaderAdapter = () => {
  const { getReport } = ReportAdapter();

  // state
  const [report, setReport] = useState<IReport>();

  useEffect(() => {
    getReportData();
  }, []);

  // get report
  const getReportData = async () => {
    const data = await getReport();
    setReport(data);
  };

  return {
    report,
  };
};
