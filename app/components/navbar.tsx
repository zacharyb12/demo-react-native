import { Link } from "expo-router";
import { Text, View, Pressable } from "react-native";
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
    // ---------------------------------------
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