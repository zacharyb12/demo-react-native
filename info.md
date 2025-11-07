#  Creation d'une fiche produit en React Native

### - Un bouton pour afficher ou cacher  le produit
### - un bouton pour afficher la description du produit


const product = {
 name: "Jordan Sneakers",
 price: 79.99,
 image:
"https://cdn.pixabay.com/photo/2016/10/28/09/41/jordan-shoes-1777572_1
280.jpg",
 description: "Chaussures confortables pour le sport et la vie quotidienne"
 };

 ---
 ##### Informations balises :

 ## Input : 
 value : valeur contrôlée du champ : value={email}
onChangeText : fonction appelée à chaque changement : onChangeText={setEmail}
placeholder : texte affiché quand le champ est vide : placeholder="Entrez votre email"
keyboardType : type de clavier affiché : keyboardType="email-address"
secureTextEntry : cache le texte (mot de passe) : secureTextEntry={true}
autoCapitalize : contrôle la capitalisation automatique : autoCapitalize="none"
autoCorrect : active ou désactive la correction auto : autoCorrect={false}
maxLength : limite le nombre de caractères : maxLength={20}
multiline : permet plusieurs lignes : multiline={true}
editable : rend le champ non modifiable : editable={false}
onFocus : action au focus du champ : onFocus={() => console.log('focus')}
onBlur : action quand le champ perd le focus : onBlur={() => console.log('blur')}


## Button 
title : texte du bouton : title="Envoyer"
onPress : fonction appelée au clic : onPress={handleSubmit}
color : couleur du bouton (selon plateforme) : color="blue"
disabled : désactive le bouton : disabled={true}

## Pressable
onPress : fonction appelée au clic : onPress={() => console.log('clic')}
onLongPress : fonction appelée sur appui long : onLongPress={() => console.log('long
clic')}
style : style dynamique ou statique : style={{ padding: 10 }}
children : contenu du pressable : <Text>Valider</Text>

## Switch

value : état du switch (on/off) : value={newsletter}
onValueChange : fonction appelée quand l’état change : onValueChange={setNewsletter}
disabled : désactive le switch : disabled={true}
thumbColor : couleur du curseur : thumbColor="white"
trackColor : couleur du fond : trackColor={{ false: 'gray', true: 'green' }}

## Modal 
visible : affiche ou cache la fenêtre : visible={modalVisible}
animationType : type d’animation : animationType="slide"
transparent : rend le fond transparent : transparent={true}
onRequestClose : fonction appelée à la fermeture (Android) : onRequestClose={() =>
setModalVisible(false)}


## Text

style : styles du texte : style={{ fontSize: 16 }}
numberOfLines : limite le nombre de lignes affichées : numberOfLines={1}
ellipsizeMode : mode de troncature : ellipsizeMode="tail"
onPress : fonction appelée au clic : onPress={() => console.log('texte cliqué')}

## ScrollView

contentContainerStyle : styles internes : contentContainerStyle={{ padding: 20 }}
keyboardShouldPersistTaps : garde le clavier ouvert : keyboardShouldPersistTaps="handled"
showsVerticalScrollIndicator : masque la barre de scroll :
showsVerticalScrollIndicator={false}