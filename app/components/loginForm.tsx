import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { TextInput, Button } from "react-native";

function LoginForm(){

    // valeurs des champs de saisie
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    // obtenir la fonction de connexion depuis le contexte d'authentification
    const {login} = useAuth();

    // gérer la soumission du formulaire de connexion
    const handleLogin = async () => {
        try {
            await login(email,password);
        } catch (error) {
            alert('Erreur lors de la connexion :' + error);
        }
    }

    return(
        <>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
        <Button title="Login" onPress={handleLogin}/>
        </>
    )
}

export default LoginForm;