import { createContext, useEffect, useState } from "react";

// Context pour la recuperation des valeurs
const TimerContext = createContext<any>(undefined)

// Provider pour fournir les valeurs aux composants enfants
const TimerProvider = ({children} : {children : React.ReactNode}) => {

    // ici un useState pour stocker le temps et le modifier pendant l'execution
    const [time,setTime] = useState(new Date())

    useEffect(() => {
        // creation d'un interval pour mettre a jour le temps chaque seconde
        const interval = setInterval(()=> {
            setTime(new Date())
        },1000)

        // nettoyage de l'interval lors du demontage du composant
        return ()=>{
            clearInterval(interval)
        }
    },[])

    return (
        // ici on fournit l'information au enfants
        <TimerContext.Provider value={{time}}>
            {children}
        </TimerContext.Provider>
    )
}

export { TimerProvider };
export default TimerContext;