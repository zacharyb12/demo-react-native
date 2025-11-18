import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useTimer } from "../hooks/useTimer";


function Navbar(){

    const {time} = useTimer();

    function getSeconds(){
        if(time.getSeconds() < 10){
            return '0' + time.getSeconds();
        }
        return time.getSeconds();
    }

    function getMinutes(){
        if(time.getMinutes() < 10){
            return '0' + time.getMinutes();
        }
        return time.getMinutes();
    }

    function getHours(){
        if(time.getHours() < 10){
            return '0' + time.getHours();
        }
        return time.getHours();
    }

    return(
        <>
        <View style={styles.navbarContainer}>
            <Link href="/" style={styles.navLink}>
                <Text>home</Text>
            </Link>

            <Link href="/pages/DemoHome" style={styles.navLink}>
                <Text>Demo</Text>
            </Link>

            <Link href="/exo/exoHome" style={styles.navLink}>
                <Text>Exo</Text>
            </Link>

            <Link href="/pages/todo/todoList" style={styles.navLink}>
                <Text>Todo List</Text>
            </Link>

            <Link href="/pages/H.nativesFunctions" style={styles.navLink}>
                <Text>nativesFunc</Text>
            </Link>

        </View>
        <View style={styles.timeContainer}>
            <Text>{getHours()} : {getMinutes()} : {getSeconds()}</Text>
        </View>

        </>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    navbarContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        backgroundColor:"lightgrey"
    },
    navLink : {
        marginHorizontal:10,
        fontSize:16,
        fontWeight:"bold",
    },
    timeContainer:{
        alignItems:"center",
        padding:10,
        backgroundColor:"lightgrey"
    }
})