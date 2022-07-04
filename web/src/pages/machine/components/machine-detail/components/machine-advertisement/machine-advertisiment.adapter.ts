import { MachineAdapter } from "vending-core/model-machine/machine.adapter";
import { MachineAdvertisementProps } from "./machine-advertisement.props";
import { useCallback, useState, useEffect, useRef } from "react";
import { PopupModalRefProps } from "libraries/components/modal-popup/modal-popup.components";
import { ConfirmModalRefProps } from "libraries/components/confirm-modal/confirm-modal";
import { Subscription } from "rxjs";
import EventBus, {
  EventBusName,
  EventBusType,
} from "vending-core/common/event-bus";
export const MachineAdvertisementAdapter = (
  props: MachineAdvertisementProps
) => {
  const { machine } = props;
  const { getMachineBannerByMachineId, deleteMachineBanner } = MachineAdapter();
  const [banner, setBanner] = useState<any[]>([]);

  const refEditBannerModal = useRef<PopupModalRefProps>(null);
  const refConfirmModal = useRef<ConfirmModalRefProps>(null);

  const subscriptions = new Subscription();

  useEffect(() => {
    EventBusSubCription();
  }, []);

  useEffect(() => {
    getBanner();
  }, [machine]);

  // Eventbus Subcription
  const EventBusSubCription = () => {
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        const payload = res?.payload;
        switch (res?.type) {
          case EventBusName.ADD_BANNER:
            console.log("EventBus Add Banner"); 
            getBanner();
            break;
        }
      })
    );
  };

  const getBanner = async () => {
    const res = await getMachineBannerByMachineId(machine?.machine.id || "");
    if (res) {
      setBanner(res);
    }
  };

  const deleteBanner = async (id: string) => {
    const res = await deleteMachineBanner(id);
    getBanner();
  };

  // -------
  const openEditBannerModal = () => {
    refEditBannerModal.current?.setIsOpen(true);
  };

  const closeEditBannerModal = () => {
    refEditBannerModal.current?.setIsOpen(false);
  };

  const openConfirmDelete = (id: string) => {
    refConfirmModal.current?.openModal(true, () => deleteBanner, id);
  };

  return {
    banner,
    deleteBanner,
    refConfirmModal,
    openEditBannerModal,
    closeEditBannerModal,
    refEditBannerModal,
    openConfirmDelete,
  };
};
