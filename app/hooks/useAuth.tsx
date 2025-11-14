import { useContext} from "react";
import { AuthContext } from "../Context/authcontext";

// Hook personnalisé pour accéder au contexte d'authentification
export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("Le context est undefined dans le hooks useAuth");
    }

    const {user, login, register, logout, isLoading, error, isAuthenticated} = context;
    return {user, login, register, logout, isLoading, error, isAuthenticated};
}