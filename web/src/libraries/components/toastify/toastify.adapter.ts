

import { toast } from 'react-toastify';
import { ENUM_TOASTIFY } from 'libraries/enums/toastify';
import ToastifyMessageScreen from "./toastify-message.screen";

const ToastifyAdapter = () =>{

    const info = (message: string) => {
        const Message = ToastifyMessageScreen({
            kind:ENUM_TOASTIFY.INTRODUCE,
            message
        });
        toast.info(Message);
    }

    const success = (message: string) => {
        const Message = ToastifyMessageScreen({
            kind:ENUM_TOASTIFY.SUCCESS,
            message
        });
        toast.success(Message);
    }

    const warning = (message: string) => {
        const Message = ToastifyMessageScreen({
            kind:ENUM_TOASTIFY.WARNING,
            message
        });
        toast.warn(Message);
    }

    const error = (message: string) => {
        const Message = ToastifyMessageScreen({
            kind:ENUM_TOASTIFY.ERROR,
            message
        });
        toast.error(Message);
    }

    const errorFromAPI = (response:any , defaultMess:string , title:string = "") => {
        const { error } = ToastifyAdapter();
    
        let message = defaultMess;
    
        if(response && response?.message && Object.prototype.toString.call(response?.message) === "[object String]"){
            message = response.message;
        }
    
        error(title + message);
    }

    return { 
        info,
        success,
        warning,
        error,
        errorFromAPI
    }
}

export default ToastifyAdapter;