import { useState } from "react";
import '../../../../libraries/styles/components/button.scss'

export default function ButtonV2(props:any) {
    const {text, onClick} = props;

    return <button 
        className="button"
        onClick={() => {
            if (onClick !== undefined) {
                onClick();
            }
        }}
        >
        {text}
    </button>
}