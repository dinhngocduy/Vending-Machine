import { IconDeleteDisabled } from "libraries/icons/icon";
import Button from "libraries/components/button/Button";
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { ModalInput } from "../modal-input/modal-input";
import { RightSidebarModalProps } from "./right-sidebar-modal-props";
import "./right-sidebar-modal.scss";

export interface SideModalRefProps {
  setIsOpen: any;
}

export const RightSideBarModal = forwardRef(
  (props: RightSidebarModalProps, ref: Ref<SideModalRefProps>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const id = Math.random().toString(36).slice(2);

    useImperativeHandle(ref, () => ({ setIsOpen }));

    useEffect(() => {
      document.getElementById(id)?.classList.toggle("open", isOpen);
    }, [isOpen]);

    return (
      <div className="sidebar-modal-ctn" id={id}>
        <div className="sidebar-modal-content">
          <div className="sidebar-modal-header">
            <p>{props.title}</p>
            <IconDeleteDisabled onClick={() => setIsOpen(false)} />
          </div>
          <div className="sidebar-modal-body">{props.body}</div>
        </div>
      </div>
    );
  }
);
