import { Button, ScrollView ,View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IntroReactNative from "./pages/introReactNative";
import { useState } from "react";

export default function Index() {
 const [isVisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
  setIsVisible(!isVisible);
}

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
        <Button title="afficher/cacher" onPress={toggleVisibility}></Button>
       {isVisible ? (<IntroReactNative />) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


