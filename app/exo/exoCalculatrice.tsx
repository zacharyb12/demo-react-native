import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


// implementer une calculatrice 

// deux inputText
// quatre boutons : + - * /
// un boutton resultat 

// le resultat ne s'affiche que quand on clique



function ExoCalculatrice(){
    const [nb1,setNb1]=useState("");
    const [operator,setOperateur] = useState("")
    const [nb2,setNb2]=useState("");

    const [result,setResult]=useState(0)

    const[showOperator,setShowOperator]=useState(false)

    function getResult(){
        if(parseFloat(nb1) || parseFloat(nb2)){
            switch(operator){
                case "+":
                    setResult(parseFloat(nb1) + parseFloat(nb2))
                    break;
                case "-":
                    setResult(parseFloat(nb1) - parseFloat(nb2))
                    break;
                case "*":
                    setResult(parseFloat(nb1) * parseFloat(nb2))
                    break;
                case "/":
                    setResult(parseFloat(nb1) / parseFloat(nb2))
                    break;
            }
        }
    }
    return(
        <>
        <Text>Calculatrice</Text>
        <View>

            <View>
                <Text>Nombre 1 :</Text>
                <TextInput
                style={{height:40,borderColor:"gray",borderWidth:1}}
                value={nb1}
                onChangeText={setNb1}
                />
                {parseFloat(nb1) ? null: <Text style={{color:"red"}}>Valeur non valide</Text>}
            </View>

            {showOperator ? 
            
            <View>
                <Text>Operateur :</Text>
                <Button title="+"  onPress={() => {setOperateur("+"),setShowOperator(false)}}/>
                <Button title="-"  onPress={() => {setOperateur("-"),setShowOperator(false)}}/>
                <Button title="/"  onPress={() => {setOperateur("/"),setShowOperator(false)}}/>
                <Button title="*"  onPress={() => {setOperateur("*"),setShowOperator(false)}}/>
            </View>
            :

            <Button title="operateur" onPress={()=>setShowOperator(true)}/>
            }

            <View>
                <Text>Nombre 2:</Text>
                <TextInput
                style={{height:40,borderColor:"gray",borderWidth:1}}
                value={nb2}
                onChangeText={setNb2}
                />
            {parseFloat(nb2) ? null: <Text style={{color:"red"}}>Valeur non valide</Text>}

            </View>

            <View>
                <Button title="=" onPress={getResult}/>
                <Text>Resultat :{result}</Text>
            </View>

        </View>
        </>
    )
}


export default ExoCalculatrice;