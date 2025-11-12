import { useState } from "react";
import { View } from "react-native";
import Product from "../models/product.model";
import IntroReactNative from "./A.introReactNative";
import ComposantDemo from "./B.composantsDemo";

function DemoHome(){
    const [product , setProduct] = useState<Product>({id:"1",name:"Produit 1",price:10,image:"https://via.placeholder.com/150"})
    return(
        <View>

            <View>
                <IntroReactNative />
            </View>
            <View>
                <ComposantDemo productParams={product}  setProductParams={setProduct}/>
            </View>

        </View>
    )
}
export default DemoHome;