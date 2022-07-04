import Button from "libraries/components/button/Button";
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { ConfirmModalProps } from "./confirm-modal.props";
import "./confirm-modal.scss";

export interface ConfirmModalRefProps {
  openModal: any;
}

export const ConfirmModal = forwardRef(
  (props: ConfirmModalProps, ref: Ref<ConfirmModalRefProps>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [callBack, setCallBack] = useState<any>();
    const [params, setParams] = useState<any>();
    const id = Math.random().toString(36).slice(2);

    useImperativeHandle(ref, () => ({ openModal }));

    useEffect(() => {
      document.getElementById(id)?.classList.toggle("open", isOpen);
    }, [isOpen]);

    // open Modal
    const openModal = (isOpen: boolean, callBack?: any, params?: any) => {
      setIsOpen(isOpen);
      if (callBack) {
        setCallBack(callBack);
      }
      if (params) {
        setParams(params);
      }
    };

    // click continue
    const clickContinue = () => {
      if (callBack) {
        callBack(params);
      }
      setIsOpen(false);
    };

    return (
      <div className="confirm-modal-ctn" id={id}>
        <div className="confirm-modal-content">
          <div className="confirm-modal-header">
            <p>Bạn có chắc chắn thực hiện thao tác này?</p>
            {/* <IconDeleteDisabled onClick={() => setIsOpen(false)} /> */}
          </div>
          <div className="confirm-modal-body">
            {/* <p className="confirm-modal-text">
              Bạn có chắc chắn thực hiện thao tác này?
            </p> */}
            <div className="confirm-modal-footer">
              <Button
                background="#fff"
                textColor="#808999"
                borderColor="#808999"
                height={40}
                width={100}
                onClick={() => setIsOpen(false)}
              >
                <>
                  <p style={{ marginBottom: 0 }}>Huỷ</p>
                </>
              </Button>
              <Button
                background="#00BAB5"
                textColor="#FFF"
                borderColor="none"
                height={40}
                width={100}
                onClick={clickContinue}
              >
                <>
                  <p style={{ marginBottom: 0 }}>Tiếp tục</p>
                </>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
