import moment from "moment";

function hasInDays(time:string , days:number){
    const from = moment(time);
    const now = moment();
    
    const period = moment.duration(from.diff(now)).asDays();
    if(period > days){
        return false
    }

    return true
}

export default hasInDays