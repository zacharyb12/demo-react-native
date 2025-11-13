import apiClient from "../api/apiClient";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authService = {

    login : async (email : string , password : string) => {
        const response = await apiClient.post('/auth/login', {email,password});

        const {token , user } = response.data;

        await AsyncStorage.setItem('token' , token)

        await AsyncStorage.setItem('user' , JSON.stringify(user));

        return {user}
    },

    register : async (username : string , email : string , password : string) => {
        const response = await apiClient.post('/auth/register',{username, email, password});

        const {token , user } = response.data;

        await AsyncStorage.setItem('token' , token)
        await AsyncStorage.setItem('user' , JSON.stringify(user));

        return {user}
    },

    logout : async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
    },
    
    getToken : async () => {
        return await AsyncStorage.getItem('token');
    }
}