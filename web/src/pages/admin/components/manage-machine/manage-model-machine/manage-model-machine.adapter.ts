import { PopupModalRefProps } from "libraries/components/modal-popup/modal-popup.components";
import { IMachineModel } from "libraries/types/machine";
import { useEffect, useRef, useState } from "react";
import { AdminAdapter } from "vending-core/modal-admin/admin-adapter";

export const ManageModelMachineAdapter = () => {
  const { getListMachineModel } = AdminAdapter();
  const refAddModelMachineModal = useRef<PopupModalRefProps>(null);

  // state
  const [listModel, setListModel] = useState<IMachineModel[]>([]);

  //
  useEffect(() => {
    getListMachineModelData();
  }, []);

  // get list Machine model
  const getListMachineModelData = () => {
    getListMachineModel({}).then((res) => {
      if (res) {
        setListModel(res);
      }
    });
  };

  const openAddModelMachineModal = () => {
    refAddModelMachineModal.current?.setIsOpen(true);
  };

  const closeAddModelMachineModal = () => {
    refAddModelMachineModal.current?.setIsOpen(false);
  };

  return {
    refAddModelMachineModal,
    openAddModelMachineModal,
    closeAddModelMachineModal,
    listModel,
  };
};
