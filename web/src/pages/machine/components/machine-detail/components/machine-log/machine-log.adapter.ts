import { MachineAdapter } from 'vending-core/model-machine/machine.adapter';
import { useState, useEffect } from 'react';
export const MachineLogAdapter = () => {
    const {getListFileLog} = MachineAdapter()

    const [listLog, setListLog] = useState<string[]>([])

    useEffect(()=>{
        getFileLog();
    },[])

    const getFileLog = async () => {
         const res = await getListFileLog()
         if(res){
             setListLog(res)
         }
    }

    return {
      listLog
    }
}