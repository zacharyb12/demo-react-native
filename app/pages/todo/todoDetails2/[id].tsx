import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

function TodoDetails(){
    const {id} = useLocalSearchParams<{id: string}>();
    return(
        <View>
            <Text>id : {id}</Text>
        </View>

    )
}

export default TodoDetails;