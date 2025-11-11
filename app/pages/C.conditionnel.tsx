import { Text,Button } from "react-native";
import { useState } from "react";


function ConditionnelPage() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
        <Text>Conditionnel Page</Text>
        {/* Pour gérer l'affichage conditionnel il sera possible d'utiliser un hooks ce qui permet de changer sa valeur pendant l'execution */}
        {/* Ici nous affichons le contenu conditionnellement */}

        <Button title="Toggle" onPress={() => setIsVisible(!isVisible)} />
        
        {/* Ici une condition ternaire qui affiche le composant ou null */}
        {isVisible ? <Text>Contenu conditionnel affiché</Text> : null}
        </>
    )
}
export default ConditionnelPage;