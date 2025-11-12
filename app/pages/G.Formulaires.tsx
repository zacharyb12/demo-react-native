import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import UserAddForm from "../components/userAddForm";
import { UserAdd } from "../models/user.model";

function DemoFormulaires() {

    const [nom , setNom] = useState("valeur par defaut");


    // l'erreur afficher peut venir du back-end
    // const [errorMail , setErrorMail] = useState<string>("");
    // const [errorPassword , setErrorPassword] = useState<string>("");
    // const [errorUsername , setErrorUsername] = useState<string>("");

    // const [user , setUser] = useState<UserAdd | undefined>(undefined)

    // function submitform(){
    //     fetch('https://jsonplaceholder.typicode.com/posts', {email , password})
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         setErrorMail(error.message);
    //     });
    // }

    const [user , setUser] = useState<UserAdd>(
        {
            nom : "",
            prenom : "",
            email : "",
            password : ""
        }
    )


    return (
        <>
        <Text>Formulaires Demo</Text>

        <View>
            <View>
                <Text>{nom}</Text>
            </View>
            <View>
                <TextInput
                value={nom}
                onChangeText={setNom}
                />
                {nom.length < 3 ? <Text style={{color: 'red'}}>Le nom doit faire au moins 3 caractères</Text> : null}
                {nom.length > 15 ? <Text style={{color: 'red'}}>Le nom doit faire moins de 15 caractères</Text> : null}
                {nom.includes(' ') ? <Text style={{color: 'red'}}>Le nom ne doit pas contenir d&apos; espace</Text> : null}
        </View>

        <UserAddForm user={user} setUser={setUser}/>
    
        </View>

        


        </>
    )
}


export default DemoFormulaires;