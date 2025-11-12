import { createContext, useState } from "react";

const CompteurContext = createContext<any>(undefined)

const CompteurProvider = ({children} : {children: React.ReactNode}) => {

    const [compteur, setCompteur] = useState<number>(0)
    
    const increment = () => setCompteur(compteur + 1)
    const decrement = () => setCompteur(compteur - 1)
    const reset = () => setCompteur(0)

    return(
        <CompteurContext.Provider value={{compteur , increment, decrement, reset}}>
            {children}
        </CompteurContext.Provider>
    )
}

export { CompteurProvider };
export default CompteurContext;