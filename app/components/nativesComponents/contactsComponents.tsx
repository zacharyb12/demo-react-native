import { Text, View,Pressable, FlatList } from 'react-native';
import { useState } from 'react';


//1. installer la librairie expo-contacts
// npx expo install expo-contacts

//2. importe la librairie
import * as Contacts from 'expo-contacts';


function ContactsComponents() {
    
    // 3. prevoir un state pour stocker les contacts
    const [contacts, setContacts] = useState<Contacts.Contact[] | null>(null);


    const loadContacts = async () => {
        // 4. demander la permission d'acceder aux contacts
        const { status } = await Contacts.requestPermissionsAsync();

        if(status !== 'granted') {
            alert('Permission refusée');
            return;
        }

        // 5. recuperer les contacts
        const {data} = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails, Contacts.Fields.Name],
        })
        // 6. stocker les contacts dans le state
        setContacts(data);
    }

    return (
        <View>
            <Text>Contacts Components</Text>

            {/* Déclencheur  */}
            <Pressable
            onPress={loadContacts}
            >
                <Text>charger les contacts</Text>
            </Pressable>

            {/* affichage ou le traitement de la reponse */}
            <FlatList
            data={contacts}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item})=>(
                <View>
                    {/* recuperation du nom ( simple ) */}
                    <Text>Nom : {item.name}</Text>

                    {/* Le resultat peut contenir plusieurs numeros */}
                    {item.phoneNumbers && item.phoneNumbers.length > 0 && (
                        
                            <Text>{item.phoneNumbers[0].number}</Text>
                    
                    )}

                    {/* Emails peut contenir plusieurs resultats*/}
                    {item.emails && item.emails.length > 0 && (

                        <Text>{item.emails[0].email}</Text>

                    )}
                    
                </View>
            )}
            />

        </View>
    )
}

export default ContactsComponents;