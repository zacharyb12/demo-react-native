import { useContext } from "react";
import TimerContext from "../Context/timerContext";

export function useTimer(){
    const time = useContext(TimerContext)

    return time;
}