import { Text, TextInput,Button,View } from "react-native";
import { useEffect,useState } from "react";

function UseEffectDemo() {
    // ici un hook pour afficher ou cacher le composant qui utilise useEffect
    const [showDemoEffect, setShowDemoEffect] = useState(true);

    return (
        <>
        <Text>Use Effect Demo Page</Text>
        <View>
            <Button title="Toggle Demo" onPress={() => setShowDemoEffect(!showDemoEffect)} />
        </View>
        {/* ici une condition ternaire qui affiche le composant ou null */}
        {showDemoEffect? <DemoEffect /> : null}
        </>
    )
}

// Composant qui utilise useEffect
function DemoEffect(){
    // Hook d'état pour une valeur qui peut changer
        const [value , setValue] = useState("");

    // use effect : useEffect( () => {} , [] )
    // permet d'éffectuer des actions lors du montage et démontage d'un composant ainsi que lors de la mise à jour de certaines variables
        useEffect(() => {

        // Code à exécuter lors du montage du composant
        console.log("Composant monté");
        console.log("Valeur actuelle :", value);

        // Code à exécuter lors du démontage du composant
        return () => {
            console.log("Composant démonté");
        };
        
        // Le tableau vide signifie que l'effet ne s'exécute qu'une seule fois
        // si une variable y était ajoutée, l'effet s'exécuterait à chaque fois que cette variable change
    }, [value]); 

    return (
        <>
        
        {/* ici lorsque l'utilisateur tape dans le champ de texte 
        la valeur espionné par le useEffect change et 
        execute le code contenu dans le useEffect */}

        <Text>Demo Effect Page</Text>
        <TextInput placeholder="Type here..." value={value} onChangeText={setValue} />
        </>
    )
}
export default UseEffectDemo;