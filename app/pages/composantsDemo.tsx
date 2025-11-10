import { Text,View , TextInput } from "react-native"
import { Product } from "../models/product.model"
import { style } from "../style/global.style";

// Ici le composant enfant recupere une valeur à afficher et une fonction qui permet de modifier cette valeur depuis la fonction du parent
function ComposantDemo({product,setProduct} : {product : Product ,  setProduct : (productUpdated : Product) => void }) {

// implementation de la fonction de mise à jour du prix
    function updateProductPrice(newPrice : string) : void {
        try {
            setProduct ({...product , price : parseInt(newPrice)});
        } catch (error) {
            console.error("Error updating product price:", error);
        }
    }

    // implementation de la fonction de mise à jour du nom
   function updateProductName (newName : string) : void {
        try {
            setProduct({...product , name :newName })
        } catch (error) {
            console.error("Error updating product name:", error);
        }
    }

    return (
        <>
        {/* Ici la view englobe le contenu ( div ) avec un seul style appliquer*/}
        <View style={style.container}>
            {/* ici plusieurs style sont appliquer a la balise Text */}
            <Text style={[ style.bgDark , style.textWhite ]}>Composant de démonstration</Text>
            <Text>{product.id}</Text>
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
        </View>

        <View>
            {/* Input name : prend en paramètre la fonction de mise à jour du nom */}
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10}}  
            placeholder={product.name}
              onChangeText={updateProductName}
              value={product.name}
            />

             {/* Input price : prend en paramètre la fonction de mise a jour du prix */}
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10}}
            placeholder={product.price.toString()}
            keyboardType="numeric"
            onChangeText={updateProductPrice}
            value={product.price.toString()}
            />

        </View>

        </>
    )
}

export default ComposantDemo