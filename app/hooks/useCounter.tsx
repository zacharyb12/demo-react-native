import { useContext } from "react"
import CompteurContext from "../Context/CompteurContext"


export const useCounter = () => {

    const context = useContext(CompteurContext)

    const { compteur, increment, decrement, reset } = context
    
    return { compteur, increment, decrement, reset }

}