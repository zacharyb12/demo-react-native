import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

//1 . installer expo-camera : npx expo install expo-camera
// importer les composants necessaires de expo-camera
import { Camera, CameraView } from 'expo-camera';


function CameraPage() {

const [hasPermission , setHasPermission] = useState<boolean | null>(null);

const [photo , setPhoto] = useState<string | null>(null);

const [cameraRef , setCameraRef] = useState<any>(null);

// fonction pour demander la permission d'utiliser la camera
const requestPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    setHasPermission(status === 'granted');
}

// fonction pour prendre une photo
const takePicture = async () => {
    if (cameraRef){
        const photo = await cameraRef.takePictureAsync();
        setPhoto(photo.uri);
    }
}

// si l'utilisateur n'a pas encore repondu a la demande de permission on affiche le boutton pour demander la permission
if(hasPermission === null){
    return(
    <View>
        <Button title="Demander la permission" onPress={requestPermission} />
    </View>
    )
}

// si l'utilisateur n'as pas encore donné la permission on affiche un message
if(hasPermission === false){
    return(
        <View>
            <Text>Permission refusée</Text>
            <Button title="Demander la permission" onPress={requestPermission} />
        </View>
    )
}

return (
    <View style={styles.container}>
        
        {!photo ? (
            <>
                <CameraView style={styles.camera} ref={setCameraRef} />
                <Button title="Prendre une photo" onPress={takePicture} />
            </>
        ) : (
            <>
                <Image source={{uri:photo}} style={styles.preview} />
                <Button title="Reprendre une photo" onPress={() => setPhoto(null)} />
            </>
        )}
    </View>
)

}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  camera: { flex: 1 },
  preview: { width: 300, height: 400, marginVertical: 20 },
})

export default CameraPage;

