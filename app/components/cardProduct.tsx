import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Product } from "../models/product.model"

// Ici le composant enfant recupere une valeur à afficher et une fonction qui permet de modifier cette valeur depuis la fonction du parent
// Les types utilisés sont Product ( modèle que nous avons créé ) 
// et une fonction qui prend en paramètre un produit( de type product ) et ne retourne rien (void)
function CardProduct({productParams,setProductParams} : {productParams : Product, setProductParams: (product: Product) => void}) {

    return (
        <>
        {/* Affichage des informations du produit */}
            <View style={style.card}>
                <View style={style.containerText}>
                    <Text style={style.titleText}>{productParams.name}</Text>
                    <Text style={style.priceText}>Prix : {productParams.price}€</Text>
                </View>
                {/* Il sera necessaire de fournir une dimension pour l'image  */}
                <Image source={{uri : productParams.image}} style={style.image} />
                <Pressable style={style.buttonBuy} >
                    <Text style={style.buttonText}>Ajouter au panier</Text>
                </Pressable>
            </View>
        

        </>
    )
}

export default CardProduct

// Styles pour le composant
const style = StyleSheet.create({
    card : {
        backgroundColor : '#ffffff99',
        width : '70%',
        height : 'auto',
        justifyContent : 'center',
        alignItems : 'center',
        margin: 'auto',
        marginBottom: 30,
        padding : 20,
        borderRadius : 5,
    },
    containerText : {
        backgroundColor : '#ffffff',
        width : '80%',
        margin : 'auto',
        marginBottom : 15,
        borderRadius : 15,
    },
    titleText : {
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 20,
    },
    priceText : {
        textAlign : 'center',
        fontSize : 15,
        color : '#f80000ff'
    },
    image:{
        width : 250,
        height : 200,
        boxShadow : '4px 4px 10px #00000077',
    },
    buttonBuy : {
        backgroundColor : '#ffffffff',
        margin : 20,
        padding : 10,
        borderRadius : 10,
        boxShadow : '2px 2px 5px #00000077',
    },
    buttonText : {
        color : '#000000ff',
        fontWeight : 'bold',
    }
})
