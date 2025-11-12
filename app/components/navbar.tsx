import { Text, View } from "react-native";
import { useTimer } from "../hooks/useTimer";


function Navbar(){

    const {time} = useTimer();

    function getSeconds(){
        if(time.getSeconds() < 10){
            return '0' + time.getSeconds();
        }
        return time.getSeconds();
    }

    return(
        <>
        <View>
            <Text>home</Text>
            <Text>Demo</Text>
            <Text>Exo</Text>
        </View>
        <View>
            <Text>{time.getHours()} : {time.getMinutes()} : {getSeconds()}</Text>
        </View>

        </>
    )
}

export default Navbar;