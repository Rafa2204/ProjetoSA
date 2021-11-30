import react from "react";
import React, {useState, useEffect} from "react";
import {View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView, Image, Alert, ScrollView} from "react-native"
import axios from "axios"
// import { AuthProvider } from "../src/providers/auth";

const styles = StyleSheet.create({
    Geral: {
      flex: 1, 
      backgroundColor: 'black'
    },
    
    botaovoltar:{
      width: 35, 
      height:35, 
      marginTop:13, 
      marginLeft:10
    },
    
    informaçoes: {
      margin:10,
      marginTop:50,
      width:300,
      height: 70,
      marginLeft:100,         
    }, 
          
    informaçoes2: {
      color: 'white', 
      fontSize:22,
    },
    
    inputnome:{
      marginTop: 0,
      paddingTop: 0,
      width:310,
      height: 53, 
      backgroundColor: '#F0F8FF', 
      borderRadius: 5,
      marginLeft:45,  
    },
    
    cornome:{
      fontSize: 20,
      borderRadius: 5,
    },
    
    inputemail:{
      marginTop: 10,
      paddingTop: 0,
      width:310,
      height: 53, 
      backgroundColor: '#F0F8FF', 
      borderRadius: 5,
      marginLeft:45, 
    },
    
    coremail:{
      fontSize: 20,
      borderRadius: 5,  
    },
    
    inputtelefone:{
      marginTop: 10,
      paddingTop: 0,
      width:310,
      height: 53, 
      backgroundColor: '#F0F8FF', 
      borderRadius: 5,
      marginLeft:45, 
    },
    
    cortelefone:{
      fontSize: 20,
      borderRadius: 5,
    },
    
    inputempresa:{
      marginTop: 10,
      paddingTop: 0,
      width:310,
      height: 53, 
      backgroundColor: '#F0F8FF', 
      borderRadius: 5,
      marginLeft:45, 
    },
    
    corempresa:{
      fontSize: 20,
      borderRadius: 5,
    },
    
    inputsenha:{
      marginTop: 10,
      paddingTop: 0,
      width:310,
      height: 53, 
      backgroundColor: '#F0F8FF', 
      borderRadius: 5,
      marginLeft:45,
      fontSize:20
    },
    
    corsenha:{
      fontSize: 20,
    },
      
    geral:{
      flex: 1, 
      backgroundColor: '#000000', 
    }, 
      
    botao: {
      width: 310, 
      height: 60,
      marginLeft: 45, 
      marginTop: 20,
      backgroundColor: '#0066ff', 
      alignItems: 'center', 
      padding: 20, 
      margin: 10,
      borderRadius: 5
       
    },
    
    botaoEntrar:{
      color:'white'
    },
    
    aba:{
      backgroundColor:'black', 
      width: 500, 
      height:60, 
      
    },

})


const Alterar = ({ navigation }) => {

    const [email, setEmail] = useState ("")
    const [senha, setSenha] = useState ("")
    const [nome, setnome] = useState ("")
    const [idade, setIdade] = useState("")
  

    function alterarCadastro(){
   
    if(email == "" || senha == ""){
      Alert.alert("Preencher campo")
    }

    else {

      const data = {
        name: nome,
        email: email,
        password: senha
      }
      
      console.log(data)

      const api = axios.create({
        baseURL: 'https://senaiuserapi.herokuapp.com',
        headers:{"Content-Type": "application/json"}
      })

      // api.get("/users")

      // .then(function(response){
      //   console.log(response.data)
      // })

      // .catch(function(error){
      //   console.log(error)
      // })


      api.patch("/users", data)
      

        .then(function(response){
        console.log("Cadastro realizado")
        console.log(response.data)
        console.log("Cadastro realizado")
        navigation.navigate("login")
        console.log(response)
      })
        
      .catch(function(error){
        console.log("Erro ao tentar cadastrar usuario")
        console.log(error)
      })
    }    
  }

    return(
        <KeyboardAvoidingView style = {styles.Geral}>
    
        <ScrollView>
      
        <View style={styles.aba}>
          <TouchableOpacity onPress={
            () => {
              navigation.navigate("login")}
            }>
            <Image 
              style = {styles.botaovoltar}
              source = {require('../src/imagem/VoltarTelaHome1.png')} 
            /> 
          </TouchableOpacity>
        </View>
  
  
        <View style = {styles.informaçoes}>
          <Text style = {styles.informaçoes2}> Altere seus dados. </Text>
        </View>
  
  
        <View style = {styles.inputnome}> 
          <TextInput 
            value= {nome}
            style = {styles.cornome}
            placeholder = "Digite seu nome... "
            autoCorrect = {false}
            onChangeText = {setnome}
          /> 
        </View>
  
  
        <View style = {styles.inputemail}> 
          <TextInput 
            value= {email}
            style = {styles.coremail}
            placeholder = "Digite seu email... "
            autoCorrect = {false}
            onChangeText = {setEmail}
          /> 
          <Text>{email}</Text>
        </View>
  
  
        <View style = {styles.inputtelefone}> 
          <TextInput 
            value= {idade}
            style = {styles.cortelefone}
            placeholder = "Digite sua idade... "
            autoCorrect = {false}
            onChangeText = {setIdade}
          /> 
        </View>
  
  
          <View style = {styles.inputsenha}> 
            <TextInput
              value = {senha}
              style = {styles.corsenha}         
              placeholder = "Digite uma senha... "
              autoCorrect = {false}
              onChangeText = {setSenha}
            />      
          </View>
  
  
          <View style = {styles.inputsenha}> 
            <TextInput
              style = {styles.corsenha}         
              placeholder = "Confirme a senha... "
              autoCorrect = {false}
              onChangeText = {() => {}}
            />      
          </View>
       
  
          <TouchableOpacity style = {styles.botao} onPress = {(alterarCadastro)}>
            
          <Text style={styles.botaoEntrar}> Cadastrar </Text>
          </TouchableOpacity>
        
  
            </ScrollView>
  
      </KeyboardAvoidingView>


    )


}

export default Alterar;


// reactDom.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />

//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
    
// )