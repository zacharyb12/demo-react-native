import { Link } from "expo-router";
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
            <Link href="/">
                <Text>home</Text>
            </Link>

            <Link href="/pages/DemoHome">
                <Text>Demo</Text>
            </Link>

            <Link href="/exo/exoHome">
                <Text>Exo</Text>
            </Link>

            <Link href="/pages/todo/todoList">
                <Text>Todo List</Text>
            </Link>

        </View>
        <View>
            <Text>{time.getHours()} : {time.getMinutes()} : {getSeconds()}</Text>
        </View>

        </>
    )
}

export default Navbar;