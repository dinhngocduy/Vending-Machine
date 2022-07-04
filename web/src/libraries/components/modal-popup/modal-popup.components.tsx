import { IconDeleteDisabled } from "libraries/icons/icon";
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { ModalPopupProps } from "./modal-popup.props";
import "./modal-popup.scss";

export interface PopupModalRefProps {
  setIsOpen: any;
}

export const ModalPopupComponent = forwardRef(
  (props: ModalPopupProps, ref: Ref<PopupModalRefProps>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const id = Math.random().toString(36).slice(2);

    useImperativeHandle(ref, () => ({ setIsOpen }));

    useEffect(() => {
      document.getElementById(id)?.classList.toggle("open", isOpen);
    }, [isOpen]);

    return (
      <div className="popup-modal-ctn" id={id}>
        <div className="popup-modal-content">
          <div className="popup-modal-header">
            <p>{props.title}</p>
            <IconDeleteDisabled onClick={() => setIsOpen(false)} />
          </div>
          <div className="popup-modal-body">{props.body}</div>
        </div>
      </div>
    );
  }
);
