import { StyleSheet, Text, View } from 'react-native';
import CameraCompleteComponent from '../components/nativesComponents/cameraCompleteComponent';
import CameraPage from '../components/nativesComponents/cameraPage';
import ContactsComponents from '../components/nativesComponents/contactsComponents';
import PositionComponent from '../components/nativesComponents/positionComponent';

function NativesFunctionsPage() {
    return (
        <View>

            <View>
                <Text>Natives Functions Page</Text>
            </View>

            <View style={styles.container}>
                <PositionComponent />
            </View>

            <View style={styles.container}>
                <ContactsComponents />
            </View>

            <View style={styles.container}>
                <CameraPage />
            </View>

            <View style={styles.container}>
                <CameraCompleteComponent />
            </View>

        </View>
    );
}
export default NativesFunctionsPage;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        margin: 'auto',
        marginTop: 50,
    },
});