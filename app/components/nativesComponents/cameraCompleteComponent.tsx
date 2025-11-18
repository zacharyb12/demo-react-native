import { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';

//installer expo-image-picker :npx expo install expo-image-picker
import * as ImagePicker from 'expo-image-picker';

function CameraCompleteComponent(){

const [imageUri, setImageUri] = useState<string | null>(null);

const openCamera = async () => {

    const { status} = await ImagePicker.requestCameraPermissionsAsync();

    if(status !== 'granted'){
        alert('Permission refusée');
        return;
    }

    const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'],
        quality: 1,
        allowsEditing: true,
        aspect: [4,3],
    })
    if(!result.canceled && result.assets.length > 0){
        setImageUri(result.assets[0].uri);
    }
}


const openPictureLibrary = async () => {

    const { status} = await ImagePicker.requestCameraPermissionsAsync();

    if(status !== 'granted'){
        alert('Permission refusée');
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 1,
    });

    if(!result.canceled && result.assets.length > 0){
        setImageUri(result.assets[0].uri);
    }
}

    return (
        <View>
            <View>
                <Text>Prendre une photo</Text>
                <Button title="Ouvrir la caméra" onPress={openCamera} />
            </View>
            <View>
                <Text>Ouvrir la galerie</Text>
                <Button title="Ouvrir la galerie" onPress={openPictureLibrary} />
            </View>

            {imageUri && (
                <Image
                source={{uri : imageUri}}
                style={{width:200,height:200,marginTop:20}}
                />
            )}
        </View>
    )
}

export default CameraCompleteComponent;