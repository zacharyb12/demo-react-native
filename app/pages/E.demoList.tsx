import {Text,FlatList} from 'react-native';
import ComposantDemo from './B.composantsDemo';
import { Product } from '../models/product.model';
import { useState } from 'react';

function DemoList(){
const [list , setList] = useState<Product[]>(
    [
    {
        id : "p1",
        name : "Product 1",
        price : 19.99,
        image : "https://cdn.pixabay.com/photo/2016/10/28/09/41/jordan-shoes-1777572_1280.jpg"
    },
        {
        id : "p2",
        name : "Product 2",
        price : 20.99,
        image : "https://cdn.pixabay.com/photo/2016/10/28/09/41/jordan-shoes-1777572_1280.jpg"
    },
        {
        id : "p3",
        name : "Product 3",
        price : 22.99,
        image : "https://cdn.pixabay.com/photo/2016/10/28/09/41/jordan-shoes-1777572_1280.jpg"
    },
        {
        id : "p4",
        name : "Product 4",
        price : 32.99,
        image : "https://cdn.pixabay.com/photo/2016/10/28/09/41/jordan-shoes-1777572_1280.jpg"
    },
]
)

function setProduct(product: Product){
    // ici on modifie un produit de la liste 
    setList(list.map((p) => p.id === product.id ? product : p));
}

return (
    <>
    <Text>Demo List</Text>

    {/* ici utilisation de flatList */}
    {/* FlatList permet de gérer l'affichage de liste de manière performante */}
    {/* Plusieurs paramètres sont disponible comme */}
    {/* data = la liste a afficher */}
    {/* renderItem = Le rendu pour chaque élément : ici nous utilisons le composant card que nous avons fait au préalable */}
    {/* showVerticalScrollIndicator = Afficher ou masquer la barre de défilement */}
    {/* keyExtractor = Une fonction pour extraire une clé unique pour chaque élément */}
    
    <FlatList
    style={{width : '90%',backgroundColor : '#000000ff'}}
    data={list}
    renderItem={({item}) => <ComposantDemo productParams={item} setProductParams={setProduct} />}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => item.id}
    />


    </>
)
}

export default DemoList;