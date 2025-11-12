import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

function TodoList(){
    const id = 5;


    return(
        <View>
            <Text>Product 1</Text>
            <Text>Name Product</Text>
            <Text>description</Text>
            <Pressable
            style={{backgroundColor:"lightgrey",padding:10,marginTop:10}} 

            onPress={() => router.push(`./todoDetails?id=${id}`)}>
            
            
                <Text>details</Text>
            </Pressable>
            <Pressable
            style={{backgroundColor:"lightgrey",padding:10,marginTop:10}} 

            onPress={() => router.push(`./todoDetails/${id}`)}>
            
            
                <Text>details2</Text>
            </Pressable>

        </View>

    )
}

export default TodoList;