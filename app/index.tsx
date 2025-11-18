import axios from 'axios';
import { CameraView } from "expo-camera";
import { useState } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";


export default function Index() {

  const [ scanned , setScanned] = useState(false);

  const [ product , setProduct] = useState<any>(null);


  const handleBarCodeScanned = async({data,type} : {data:string,type:string}) => {

    setScanned(true);

    try {

        const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)

        if(response.data.status === 1){
          setProduct(response.data.product);
        }
        else{
          alert("Produit non trouvé");
          setProduct(null);
        }


    } catch (error) {
      alert("Erreur lors de la récupération du produit : " + error);
      setProduct(null);
    }

  }


 

  return (
    <>
        <Text>Bienvenue sur la page principale</Text>

        <View>
          {/* Afficher la camera pour scanner un code barre */}
          {!scanned &&(
            <CameraView
            style={{width:300,height:300}}
            onBarcodeScanned={handleBarCodeScanned}
            barcodeScannerSettings={{barcodeTypes : ['ean13','upc_e','qr']}}
            />
          )}

          {/* Button pour reinitialiser le scan */}
          {scanned &&(
            <Button 
            title="Scanner a nouveau" 
            onPress={() => {
              setScanned(false);
              setProduct(null);
            }}/>
          )}

          {/* Afficher les informations du produit */}

          {product && (
            <ScrollView>
              <View>
                <Text>{product.image_front_url}</Text>
                <Text>Nom : {product.product_name}</Text>
                <Text>Marque : {product.brands}</Text>
                <Text>Code : {product.code}</Text>
                <Text>Quantité : {product.quantity}</Text>
                <Text>Catégories : {product.categories}</Text>
                <Text>Labels : {product.labels}</Text>
                <Text>Origine : {product.countries}</Text>
                <Text>Allergènes : {product.allergens}</Text>
                <Text>Ingrédients : {product.ingredients_text}</Text>
                <Text>Nutri-Score : {product.nutriscore_grade}</Text>
                <Text>Nova Group : {product.nova_group}</Text>
                <Text>Énergie (kcal/100g) : {product.nutriments?.energy_kcal_100g}</Text>
                <Text>Sucre (g/100g) : {product.nutriments?.sugars_100g}</Text>
                <Text>Sel (g/100g) : {product.nutriments?.salt_100g}</Text>
                <Text>Graisses (g/100g) : {product.nutriments?.fat_100g}</Text>
                <Text>Protéines (g/100g) : {product.nutriments?.proteins_100g}</Text>
                {product.image_front_url && (
                  <View style={{alignItems:"center"}}>
                    <Image
                    source={{uri: product.image_front_url}}
                    style={{width:150,height:150,marginTop:5,borderRadius:8}}
                    resizeMode="contain"
                    />
                  </View>
                )}
              </View>

            </ScrollView>
          )}
        </View>
    </>


  );
}


