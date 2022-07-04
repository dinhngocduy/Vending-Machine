import { SelectLocationRefProps } from "libraries/components/select-location/select-location-component";
import { IMachine, IMachineModel } from "libraries/types/machine";
import { IOption } from "libraries/types/type";
import { useEffect, useRef, useState } from "react";
import EventBus, { EventBusName } from "vending-core/common/event-bus";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import { EditMachineModalProps } from "./edit-machine-modal.props";

export const EditMachineModalAdapter = (props: EditMachineModalProps) => {
  const { machine, closeModal } = props;
  const { getListMachineModel, updateMachine } = MachineAdapter();
  const locationRef = useRef<SelectLocationRefProps>(null);

  const [machineName, setMachineName] = useState<string>("");
  const [serialNum, setSerialNum] = useState<string>("");
  const [machineModel, setMachineModal] = useState<IOption>();
  const [province, setProvince] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [village, setVillage] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  // const [tenant, setTenant] = useState<IOption>();
  const [status, setStatus] = useState<IOption>();
  const [description, setDescription] = useState<string>("");
  const [identifyCode, setIdentifyCode] = useState<string>("");

  //  list model
  const [listModel, setListModel] = useState<IOption[]>([]);

  useEffect(() => {
    getListMachineModeldata();
  }, []);

  // get list machine model
  const getListMachineModeldata = async () => {
    getListMachineModel()
      .then((res) => {
        if (res) {
          let data: IOption[] = res.map((element: IMachineModel) => {
            return {
              label: element.name,
              value: element.id,
            };
          });

          setListModel(data);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    setMachineName(machine?.machine?.referenceName || "");
    setSerialNum(machine?.machine?.serialNumber || "");
    setMachineModal({
      label: machine?.machine?.modelInfo?.name || "",
      value: machine?.machine?.modelInfo?.id,
    });
    setStatus({
      label: machine?.machine?.active ? "Hoạt động" : "Không hoạt động",
      value: machine?.machine?.active,
    });
    setDescription(machine?.machine?.description || "");
    setIdentifyCode(machine?.machine?.identifyCode || "");
  }, [machine]);

  // update Machine
  const updateMachineData = () => {
    const data = {
      id: machine?.machine?.id,
      referenceName: machineName,
      serialNumber: serialNum,
      modelId: machineModel?.value,
      province: locationRef.current?.city,
      district: locationRef.current?.district,
      village: locationRef.current?.ward,
      address: locationRef.current?.address,
      active: status?.value,
      description: description,
      identifyCode: identifyCode,
    };

    updateMachine(data).then((res) => {
      const payload: IMachine = {
        machine: res,
        remainProducts: machine?.remainProducts || 0,
        totalProducts: machine?.totalProducts || 0,
        totalTransactions: machine?.totalTransactions || 0,
        cashInMachine: machine?.cashInMachine || 0,
        temperature: machine?.temperature || 0,
      };

      EventBus.getInstance().post({
        type: EventBusName.UPDATE_MACHINE,
        payload: payload,
      });
      closeModal();
    });
  };

  return {
    machineName,
    serialNum,
    machineModel,
    status,
    description,
    province,
    district,
    village,
    address,
    setMachineName,
    setDescription,
    setMachineModal,
    setSerialNum,
    setStatus,
    setProvince,
    setDistrict,
    setVillage,
    setAddress,
    listModel,
    updateMachineData,
    locationRef,
    identifyCode,
    setIdentifyCode,
  };
};
