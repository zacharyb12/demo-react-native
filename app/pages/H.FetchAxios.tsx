import { Button, Text } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Episode } from '../models/episode.model';


// installer axios avec : npm install axios
function FetchAxios() {
    // ici on utilise le model renvoyé par l'API
    const [data , setData] = useState<Episode[]>([]);

    // appel de l'API avec axios dans le useEffect au chargement du composant
    useEffect(() => {

        axios.get('https://api.sampleapis.com/futurama/episodes')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {console.error(error)});

    },[])

    return (
        <>
        <Text>Fetch Axios Page</Text>
        {data.map((episode) => (
            <Text key={episode.id}>{episode.title}</Text>
        ))}
        </>
    )
}

export default FetchAxios;