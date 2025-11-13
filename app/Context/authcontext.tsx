import { createContext,useState,useEffect,ReactNode } from "react";
import { authService } from "../services/authService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "../models/userContext.model";

interface AuthContextType {
    user : UserContext | null;
    login : (email : string, password : string) => Promise<void>;
    register : (username : string , email : string, password : string) => Promise<void>;
    logout : () => Promise<void>;
    isLoading : boolean;
    error : string | null;
    isAuthenticated : boolean;
}

interface AuthProviderProps {
    children : ReactNode;
}

// Context permet de recuperer les valeurs
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider pour fournir les valeurs aux composants enfants
const AuthProvider = ({children} : AuthProviderProps) => {

    const [user , setUser] = useState<UserContext | null>(null);
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const [error , setError] = useState<string | null>(null);

    const isAuthenticated = user !== null && user.id !== null;

useEffect(() => {

    const loadDataUser = async () => {
        setIsLoading(true);
        try {
            const user = await AsyncStorage.getItem('user')
            const token = await authService.getToken();

            if(user && token){
                setUser(  JSON.parse(user)  )
            }
            
        } catch (error) {
            console.log('Erreur AuthContext :' + error) ;
            
            await authService.logout();
        }
        finally{
            setIsLoading(false);
        }
    }

    loadDataUser();

    // emitter
},[])


const login = async (email : string , password : string) => {
    setIsLoading(true);
    setError(null);

    try {
        const {user} = await authService.login(email,password);
        setUser(user);
        
    } catch (error) {
        setError('Erreur lors de la connexion authContext Login :' + error);
        throw error;
    }
    finally {
        setIsLoading(false);
    }
};

const register = async (username : string , email : string , password : string) => {
    setIsLoading(true);
    setError(null);

    try {
        const {user} = await authService.register(username,email,password);
        setUser(user);

    } catch (error) {
        setError('Erreur lors de l\'inscription authContext Register :' + error);
        throw error;
    }
    finally{
        setIsLoading(false);
    }
}

const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
        await authService.logout();
        setUser(null);
        
    } catch (error) {
        setError('Erreur lors de la déconnexion authContext Logout :' + error);
        console.log('Erreur lors du logout authContext : '+ error);
        
    }
    finally{
        setIsLoading(false);
    }
}

// la balise qui englobe les balises enfants a qui il distribue les valeurs
    return (
        <AuthContext.Provider value={{user,login , register,logout,isLoading,error,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthProvider};