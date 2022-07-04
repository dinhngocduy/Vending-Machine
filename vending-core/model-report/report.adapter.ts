import ReportServices from "./report.services";

export const ReportAdapter = () => {
  // get list machine
  const getListMachine = async (data: any) => {
    const listData = await ReportServices.getInstance().getListMachine(data);
    console.log("List Machine Response : ", listData);
    return listData;
  };

  // get report
  const getReport = async () => {
    const report = await ReportServices.getInstance().getAllReport();
    return report;
  }

  return {
    getListMachine,
    getReport,
  };
};
