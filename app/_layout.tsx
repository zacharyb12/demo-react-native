import { Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CompteurProvider } from "../app/Context/CompteurContext";

export default function RootLayout() {
  // SafeAreaView englobe toute la page
  return (
    
    <SafeAreaView style={{flex:1}}>

      <Text>Navbar</Text>
      {/*Ici le provider rend accessible les éléments qui sont partagés*/}
      <CompteurProvider>

      {/* stack devient l'enfant donc tout ce qu'il affiche peut recuperer les éléments */}
        <Stack 
        // screenOptions={{
          //   headerShown : false
          // }}
          />

      </CompteurProvider>
    </SafeAreaView>
);
}
