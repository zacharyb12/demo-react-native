import { useState } from "react";
import { SafeAreaView, ScrollView, View, TextInput, Button, Pressable, Switch, Text, Image, StyleSheet } from "react-native";

export default function IntroReactNative() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  function submitValue() {
    alert(`Nom: ${name}\nMot de passe: ${password}\nNotifications: ${isEnabled ? 'Activées' : 'Désactivées'}`);
  }

  return (
    <SafeAreaView>
      <ScrollView>

        {/* ------------------------------------------------------------------------------------------------------------------- */}
        {/* Affichage de texte */}
        <View style={styles.card}>
          {/* Affichage du texte */}
          <Text style={styles.titre}>Affichage du texte : </Text>
          <Text style={styles.text}>Bonjour de React Native</Text>
        </View>

        {/* ------------------------------------------------------------------------------------------------------------------- */}
        <View style={styles.card}>
          <Text style={styles.titre}>Limiter le nombre de lignes à afficher : </Text>
          <Text style={styles.text} numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem quae reprehenderit obcaecati? Consequuntur aperiam, reiciendis commodi, libero saepe sed fugit, provident consectetur dolorem iusto pariatur neque accusamus unde officiis.</Text>
        </View>

        {/* ------------------------------------------------------------------------------------------------------------------- */}
        <View style={styles.card}>
          <Text style={styles.titre}>Texte selectionnable : </Text>
          <Text style={styles.text} selectable={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem quae reprehenderit obcaecati? Consequuntur aperiam, reiciendis commodi, libero saepe sed fugit, provident consectetur dolorem iusto pariatur neque accusamus unde officiis.</Text>
        </View>

        {/* ------------------------------------------------------------------------------------------------------------------- */}
        {/* Affichage des images */}
        <View style={styles.card}>
          <Text style={styles.titre}>Image : </Text>
          <Image source={require('../../assets/images/react-logo.png')} />
        </View>

        {/* ------------------------------------------------------------------------------------------------------------------- */}
        {/* Input */}
        <View style={styles.card}>
          <Text style={styles.titre}>Input normal: </Text>
          <TextInput
            placeholder="Saisissez votre email"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          {/* ------------------------------------------------------------------------------------------------------------------- */}
          <View style={styles.card}>
            <Text style={styles.titre}>Input secure: </Text>
            <TextInput
              placeholder="Saisissez votre mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={styles.input}
            />
            <Button
              title="cliquez"
              onPress={submitValue}
            />

          </View>
          {/* ------------------------------------------------------------------------------------------------------------------- */}
          <View style={styles.card}>

            <Text style={styles.titre}>Input multiline: </Text>
            <TextInput
              placeholder="Saisissez une description"
              multiline={true}
              numberOfLines={4}
              style={styles.input}
            />
          </View>
        </View>

        {/* ------------------------------------------------------------------------------------------------------------------- */}
        {/*-------------------Buttons-----------------------*/}
        <View style={styles.card}>
          <Text style={styles.titre}>Button </Text>
          <Button
            title="cliquez"
            onPress={() => alert('le bouton a été cliqué')}
          />
        </View>
        <View style={styles.card}>
          <Pressable
            onPress={() => alert('Le pressable à été cliqué')}
            style={styles.customButton}
          >
            <Text style={styles.textLight}>Pressable</Text>
          </Pressable>
        </View>

        {/* ------------------------------------------------------------------------------------------------------------------- */}
        {/*-------------------Switch-----------------------*/}
        <View style={styles.card}>
          <Text style={styles.titre}>Activer les notifications</Text>
          <Switch
            value={isEnabled}
            onValueChange={() => setIsEnabled(previousState => !previousState)}
          />
        </View>
        
        {/* ------------------------------------------------------------------------------------------------------------------- */}
      </ScrollView>
    </SafeAreaView>
  );
}

// ici les styles sont définis via StyleSheet.create qui permet d'obtenir une correction syntaxique et une autocomplétion
const styles = StyleSheet.create({

  // chaque style est un objet avec des propriétés CSS en camelCase
  // on y accede via styles.nomDuStyle
  container: {
    backgroundColor: 'grey',
  },

  titre: {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },

  text: {
    fontSize: 16,
    margin: 10,
    padding: 10,
    textAlign: 'center',
  },

  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#6e6969ff',
  },

  customButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },

  textLight: {
    color: 'white',
    textAlign: 'center',
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderLeftWidth: 5,
    borderLeftColor: 'blue',
    marginTop: 30
  }
}) 