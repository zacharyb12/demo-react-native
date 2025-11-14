import apiClient from "../api/apiClient";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authService = {

    // fonction de connexion ajoute le token et l'utilisateur dans le AsyncStorage
    // Permet de fournir la route pour l'appel vers le backend et les données nécessaires
    login : async (email : string , password : string) => {
        const response = await apiClient.post('/auth/login', {email,password});

        const {token , user } = response.data;

        await AsyncStorage.setItem('token' , token)

        await AsyncStorage.setItem('user' , JSON.stringify(user));

        return {user}
    },

    // fonction d'inscription ajoute le token et l'utilisateur dans le AsyncStorage
    // Permet de fournir la route pour l'appel vers le backend et les données nécessaires
    register : async (username : string , email : string , password : string) => {
        const response = await apiClient.post('/auth/register',{username, email, password});

        const {token , user } = response.data;

        await AsyncStorage.setItem('token' , token)
        await AsyncStorage.setItem('user' , JSON.stringify(user));

        return {user}
    },

    // fonction de déconnexion supprime le token et l'utilisateur du AsyncStorage
    logout : async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
    },
    
    // fonction pour obtenir le token depuis le AsyncStorage ( facultatif )
    getToken : async () => {
        return await AsyncStorage.getItem('token');
    }
}