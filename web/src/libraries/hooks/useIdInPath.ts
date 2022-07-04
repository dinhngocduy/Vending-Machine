import { useLocation } from "react-router-dom";

export default function useIdInPath(index:number = 1) {
    const location = useLocation();
    let pathList = location.pathname.split("/");
    const id = pathList[index];

    return id;
}