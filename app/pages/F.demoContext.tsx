
import { Pressable, Text } from "react-native";
import { useCounter } from "../hooks/useCounter";

function DemoContext(){
    const {compteur,increment,decrement,reset} = useCounter();

    return(
        <>
        <Text>Demo Context Page</Text>

        <Text>{compteur}</Text>

        <Pressable 
        onPress={increment}
        style={{
            backgroundColor: 'lightblue',
            padding: 10,
        }}>
            <Text style={{textAlign: 'center'}}>Incrémenter</Text>
        </Pressable>

        <Pressable 
        onPress={decrement}
        style={{
            backgroundColor: 'red',
            padding: 10,
        }}
        >
            <Text style={{textAlign: 'center'}}>Décrémenter</Text>
        </Pressable>

        <Pressable 
        style={{
            backgroundColor: 'green',
            padding: 10,
        }}
        onPress={reset}
        >
            <Text style={{textAlign: 'center'}}>Réinitialiser</Text>
        </Pressable>
        </>
    )
}

export default DemoContext;