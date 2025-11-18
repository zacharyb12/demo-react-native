import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

// 1. installer la librairie necessaire : expo-location
import * as Location from 'expo-location';
// installation exp-location : npx expo install expo-location



function PositionComponent() {

    //2.  prevoir un objet location dans le state
    const [location,setLocation] = useState<Location.LocationObject | null>(null);

    const getLocation = async () => {
        
        //3. demander la permission a l'utilisateur d'acceder a sa position
        const { status} = await Location.requestForegroundPermissionsAsync(); 

        if (status !== 'granted') {
            Alert.alert('Permission pourr la localisation refusée');
            return;
        }

        //4. recuperer la position actuelle
        const currentLocation = await Location.getCurrentPositionAsync({});

        setLocation(currentLocation);

    }

    return (
        <View>
            <Text>Position Component</Text>

            <Pressable
            onPress={getLocation}
            style={{padding:10,backgroundColor:'#FF9500',marginTop:10,borderRadius:8}}
            >
                <Text style={{color:'#fff',textAlign:'center'}}>Obtenir ma position</Text>
            </Pressable>

            {location &&
            <View style={{marginTop:20,padding:10,backgroundColor:'#f0f0f0',borderRadius:8}}>
                <Text>Localisation</Text>
                <Text>latitude : {location.coords.latitude}</Text>
                <Text>longitude : {location.coords.longitude}</Text>
                <Text>Altitude : {location.coords.altitude}</Text>
                <Text>Précision : {location.coords.accuracy}</Text>
            </View>
            }
        </View>
    )
}

export default PositionComponent;