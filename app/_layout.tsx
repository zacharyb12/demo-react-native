import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CompteurProvider } from "../app/Context/CompteurContext";

export default function RootLayout() {
  return (
    <SafeAreaView style={{flex:1}}>

      <Text>Navbar</Text>
      <CompteurProvider>


        <Stack 
        // screenOptions={{
          //   headerShown : false
          // }}
          />

      </CompteurProvider>
    </SafeAreaView>
);
}
