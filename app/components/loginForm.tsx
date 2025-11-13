import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { TextInput, Button } from "react-native";

function LoginForm(){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const {login} = useAuth();

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