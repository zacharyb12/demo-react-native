import { useState } from "react";
import { Button, Text } from "react-native";


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

        {/* afficher sur base d'une condition */}
        {isVisible && <Text>Autre contenu conditionnel affiché</Text>}
        </>
    )
}
export default ConditionnelPage;