import { IMachine } from "libraries/types/machine";
import { IMachineReport } from "libraries/types/report";
import { useEffect, useState } from "react";
import { ReportAdapter } from "vending-core/model-report/report.adapter";

const MACHINE_PER_PAGE = 10;

export const TableReportAdapter = () => {
  const { getListMachine } = ReportAdapter();

  // state
  const [listMachine, setListMachine] = useState<IMachineReport[]>();
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  

  useEffect(() => {
    getListMachineData();
  }, [page]);

  const getListMachineData = () => {
    const data = {
      page: page - 1,
      size: MACHINE_PER_PAGE,
    };

    getListMachine(data).then((res: any) => {
      if (res?.data) {
        setListMachine(res.data);
        setTotalPage(res.numberOfPages);
      }
    });
  };

  return {
    listMachine,
    page,
    totalPage,
    setPage,
    MACHINE_PER_PAGE,
  };
};
