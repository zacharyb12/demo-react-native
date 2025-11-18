// ici on va gérer la validité du token ,
// l'interception des requêtes et réponses

import {jwtDecode} from 'jwt-decode'; // doit etre installé : npm install jwt-decode
import axios from 'axios'; // doit etre installé : npm install axios
import AsyncStorage from '@react-native-async-storage/async-storage'; // doit etre installé : npm install @react-native-async-storage/async-storage
import { router } from 'expo-router'; // disponible avec expo-router


// verifier la validité du token
const isTokenValid = (token : string) : boolean =>{

    if(!token) {
        return false;
    }

    try {
        const payload =jwtDecode<{exp : number}>(token);

        const currentTime = Date.now() / 1000; 

        return payload.exp > currentTime;
        
    } catch (error) {
        console.log("Erreur lors de la vérification du token :", error);
        return false;
    }

}

// nettoyer le token du AsyncStorage 
const cleanToken = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    // emmiter
}

// configuration Axios ( qui nous donne accès a l'intercepteur)
const apiClient = axios.create({
    // adresse ip de votre machine pour l'execution sur un vrai appareil
    // baseURL : 'http://192.168.0.194:8080/api',
    // pour l'émulateur android
    baseURL : 'http://10.0.2.2:8080/api',
    headers : {
        'Content-Type' : 'application/json'
    }
})


// Intercepteur de requêtes sortantes ajoute le token au header Authorization
apiClient.interceptors.request.use(
    async (request) => {
        const token = await AsyncStorage.getItem('token');

        if(token){
            if(isTokenValid(token)){
                request.headers.Authorization = `Bearer ${token}`;
            }else{
                await cleanToken();
                // redirection de l'utilisateur sur la page d'accueil
                router.push('/')
                return Promise.reject( new Error('Token expiré'));
            }
        }

        return request

    },
    (error : Error) => {
        return Promise.reject(error);
    }
)

// Intercepteur de réponses entrantes
apiClient.interceptors.response.use(
    (response) => response ,

    async (error) => {
        if(error.response?.status === 401){

            await cleanToken();
            router.push('/');
        }

        return Promise.reject(error);
    }
)

export default apiClient;