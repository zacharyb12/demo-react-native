import { Text, View } from "react-native";
import { useTimer } from "../hooks/useTimer";
import ExoCalculatrice from "./exoCalculatrice";

function ExoHome(){
        const {time} = useTimer();
    
        function getSeconds(){
            if(time.getSeconds() < 10){
                return '0' + time.getSeconds();
            }
            return time.getSeconds();
        }

    return(
        <View>
            <View>

                <Text>{time.getHours()} : {time.getMinutes()} : {getSeconds()}</Text>

            </View>
            <View>
                <ExoCalculatrice/>
            </View>

        </View>
    )
}

export default ExoHome;