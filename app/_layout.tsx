import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { CompteurProvider } from "../app/Context/CompteurContext";
import { TimerProvider } from "../app/Context/timerContext";
import Navbar from "./components/navbar";
import { AuthProvider } from "./Context/authcontext";

export default function RootLayout() {
  // SafeAreaView englobe toute la page
  return (
    
    <SafeAreaView style={{flex:1}}>

      <TimerProvider>
      <AuthProvider>
      
        <Navbar />
      
        {/*Ici le provider rend accessible les éléments qui sont partagés*/}

        <CompteurProvider>
        {/* stack devient l'enfant donc tout ce qu'il affiche peut recuperer les éléments */}
        <Stack 
        screenOptions={{
          headerShown : false
        }}
        />
      </CompteurProvider>

        </AuthProvider>
        </TimerProvider>

    </SafeAreaView>
);
}
