import { SelectLocationRefProps } from "libraries/components/select-location/select-location-component";
import { IMachineModel } from "libraries/types/machine";
import { IOption } from "libraries/types/type";
import { useEffect, useRef, useState } from "react";
import EventBus, { EventBusName } from "vending-core/common/event-bus";
import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import { AddMachineModalProps } from "./add-machine-modal.props";

export const AddMachineModalAdpter = (props: AddMachineModalProps) => {
  const { closeModal } = props;
  const { getListMachineModel, createMachine } = MachineAdapter();

  const locationRef = useRef<SelectLocationRefProps>(null);

  //state
  const [machineName, setMachineName] = useState<string>("");
  const [serialNum, setSerialNum] = useState<string>("");
  const [machineModel, setMachineModal] = useState<IOption>();
  const [tenant, setTenant] = useState<IOption>();
  const [status, setStatus] = useState<IOption>();
  const [description, setDescription] = useState<string>("");
  const [identityCode, setIdentityCode] = useState<string>("");

  //  list model
  const [listModel, setListModel] = useState<IOption[]>([]);

  useEffect(() => {
    getListMachineModeldata();
  }, []);

  // get list machine model
  const getListMachineModeldata = () => {
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

  // add machine

  const addMachine = () => {
    const data = {
      referenceName: machineName,
      serialNumber: serialNum,
      modelId: machineModel?.value,
      province: locationRef.current?.city,
      district: locationRef.current?.district,
      village: locationRef.current?.ward,
      address: locationRef.current?.address,
      active: status?.value,
      type: 1,
      tenant: tenant?.value,
      description: description,
      identifyCode: identityCode
    };

    console.log("ADD MACHINE : ", data);
    createMachine(data)
      .then((res) => {
        EventBus.getInstance().post({
          type: EventBusName.CREATE_MACHINE,
          payload: res,
        });
        closeModal();
      })
      .catch((err: any) => {
        closeModal();
      });
  };

  return {
    setMachineName,
    setMachineModal,
    setSerialNum,
    setTenant,
    setStatus,
    setDescription,
    listModel,
    addMachine,
    locationRef,
    identityCode,
    setIdentityCode
  };
};
