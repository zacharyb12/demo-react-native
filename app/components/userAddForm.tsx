import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { UserAdd } from "../models/user.model";

// si l'user est possiblement undefined il faut le préciser dans les props
// function UserAddForm({user,setUser} : {user : UserAdd | undefined , setUser : React.Dispatch<React.SetStateAction<UserAdd | undefined>>}) {
function UserAddForm({user,setUser} : {user : UserAdd  , setUser : React.Dispatch<React.SetStateAction<UserAdd>>}) {

 const [error , setError] = useState<string>("")


 // La gestion des erreurs
  function getErrorName(field : keyof UserAdd, value : string) : boolean{
        if(field === "nom" && value.length < 3){
            setError("Le nom doit faire au moins 3 caractères");
            return true;
        }
    
        if(field === "nom" && value.length > 3){
            setError("");
        }
        return false;
    }


// la mise à jour du formulaire
    function updateForm(field : keyof UserAdd, value : string){

        setUser(
            prev => (
                {
                    ...prev,
                    [field] : value
                }));
    
    }


    // l'action d'envoi du formulaire
    function sendForm(){
        if(user && !getErrorName("nom", user.nom)){
            // dans le cas ou le formulaire est valide
           alert(`${user?.nom} ${user?.prenom} ${user?.email} ${user?.password}`);
        }
    }


    return (
            <>
            <View>

                {/* Chaque champ du formulaire */}
                <View>
                    <Text>Nom</Text>
                    <TextInput
                    value={user.nom}
                    onChangeText={(text) => updateForm("nom", text)}
                    />
                    {error.length > 0 && <Text style={{color: 'red'}}>{error}</Text>}
                </View>
    
                <View>
                    <Text>Prenom</Text>
                    <TextInput
                    value={user.prenom}
                    onChangeText={(text) => updateForm("prenom", text)}
                    />
                </View>
    
                <View>
                    <Text>Email</Text>
                    <TextInput
                    value={user.email}
                    onChangeText={(text) => updateForm("email", text)}
                    />
                </View>
    
                <View>
                    <Text>Password</Text>
                    <TextInput
                    value={user.password}
                    onChangeText={(text) => updateForm("password", text)}
                    />
                </View>
    
                {/* Soumission du formulaire */}
                <Pressable onPress={sendForm}>
                    <Text>Envoyer</Text>
                </Pressable>
    
            </View>
            </>
        )
}

export default UserAddForm;