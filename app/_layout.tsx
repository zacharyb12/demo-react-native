import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <>

<Text>Navbar</Text>
  <Stack 
  screenOptions={{
    headerShown : false
  }}/>

  </>
  
);
}
