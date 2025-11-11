import { SafeAreaView } from "react-native-safe-area-context";

import DemoList from "./pages/E.demoList";


export default function Index() {
 

  return (
    <SafeAreaView>

      {/* ici il suffit d'ajouter un composant pour le voir apparaitre sur notre page principale */}


      <DemoList />

    </SafeAreaView>
  );
}


