import { useLocalSearchParams,router } from "expo-router";
import { Pressable, Text, View } from "react-native";

function TodoDetails(){
    const {id} = useLocalSearchParams<{id: string}>();
    return(
        <View>
            <Text>id : {id}</Text> 
            <Pressable
            onPress={() => router.back()}>
                <Text>Go back</Text>
            </Pressable>
        </View>

    )
}

export default TodoDetails;