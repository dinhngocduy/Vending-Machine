import React from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { BsFillCursorFill } from 'react-icons/bs';
import { BiError } from 'react-icons/bi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { IoIosWarning } from 'react-icons/io';
import { IToastify } from './toastify.interfaces';
import { ENUM_TOASTIFY } from 'libraries/enums/toastify';

const ToastifyMessageScreen = (props: IToastify) =>{

    const { kind , message } = props

    const getIcon = () =>{
        let icon = <BsFillCursorFill></BsFillCursorFill>;

        switch (kind) {
            case ENUM_TOASTIFY.ERROR:
                icon = <BiError></BiError>
                break;
            case ENUM_TOASTIFY.INTRODUCE:
                icon = <RiErrorWarningLine></RiErrorWarningLine>
                break;
            case ENUM_TOASTIFY.SUCCESS:
                icon = <GiConfirmed></GiConfirmed>
                break;
            case ENUM_TOASTIFY.WARNING:
                icon = <IoIosWarning></IoIosWarning>
                break;
        
            default:
                break;
        }
        return icon;
    }

    return (
        <div className="custom-toastify flex-center">
            {
                getIcon()
            }
            <span className="ml-2">
                { message }
            </span>
        </div>
    
      );
}

export default ToastifyMessageScreen;