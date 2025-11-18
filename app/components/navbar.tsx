import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useTimer } from "../hooks/useTimer";
import { useAuth } from "../hooks/useAuth";
import LoginForm from "./loginForm";


function Navbar(){
    // authentification  récupérer depuis le hook useAuth ( qui appel le contexte)
    const {user , logout ,isAuthenticated} = useAuth();

    // Timer --------------------------------
    const {time} = useTimer();

    function getSeconds(){
        if(time.getSeconds() < 10){
            return '0' + time.getSeconds();
        }
        return time.getSeconds();
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
        <View>
            {isAuthenticated && user ? (
                <>
                    <Text>Connecté en tant que : {user.username}</Text>
                    <Pressable onPress={logout}>
                        <Text>Se déconnecter</Text>
                    </Pressable>
                </>
            ) :  (
                // loginForm
                <LoginForm/>
            )}
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