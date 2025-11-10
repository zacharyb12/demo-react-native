import {ScrollView ,View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import ComposantDemo from "./pages/composantsDemo";
import { Product } from "./models/product.model";

export default function Index() {
  const [productState , setProductState ] = useState<Product>({
    id : "p2",
    name : "Product 2",
    price : 29
  });

  return (
    <SafeAreaView>

      <ScrollView>

        <View>

          <View>
            {/* Communication Parent Enfant */}
            {/* <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10}}
              placeholder="Type your message here"
              onChangeText={(text) => setMessageParent (text)}
              value={messageParent}
            /> */}
          </View>

{/* Ici le composant enfant recupere une valeur à afficher et une fonction qui permet de modifier cette valeur depuis la fonction du parent */}
            <ComposantDemo product={productState} setProduct={setProductState}/>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


