import react from "react";
import React, {useState} from "react";
import {View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView, Image, Alert, ScrollView} from "react-native"
import axios from "axios" 

const styles = StyleSheet.create({
Geral: {
  flex: 1, 
  backgroundColor: 'black'
},

imagem: {
  paddingTop: 250,
  justifyContent: 'center',
  alignItems: 'center', 
  width: 380,
  height: 300, 
},

Logo: {
  marginTop: -80, 
  width: 300,
  height: 270,
  alignItems: 'center', 
  justifyContent: 'center', 
  marginLeft:10
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

inputemail:{
  marginTop: 75,
  paddingTop: 0,
  width:310,
  height: 53, 
  backgroundColor: '#F0F8FF', 
  borderRadius: 5,
  marginLeft:45, 
},

coremail: {
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
},

corsenha: {
  fontSize: 20,
},

criarconta: {
  margin:10,
  width:300,
  height: 100,
}, 

criarcontatexto: {
  color: '#fff', 
  fontSize:20,
  marginLeft:128,
  marginTop: -10,
}, 


})


const Login = ({ navigation }) => {

 
  const [email, setEmail] = useState ("")
  const [senha, setSenha] = useState ("")
  

  function validacaoLogin(){
   
    if(email == "" || senha == ""){
      Alert.alert("Preencher campo")
    }

    else {

      const data = {
        email: email,
        password: senha
      }
     
      console.log(data)

      const api = axios.create({
        baseURL: 'http://localhost:50500',
        headers:{"Content-Type": "application/json"}
      })

      api.post("/sessions", data)
      .then(function(response){
        console.log("Cadastro realizado")
        console.log(response.data)
        console.log("Cadastro realizado")
        navigation.navigate("home")
      })
        
      .catch(function(error){
        console.log("Erro ao tentar fazer login usuario")
        console.log(error)
      })
    }    
  }


  return (
    <KeyboardAvoidingView behavior={"height"} keyboardVerticalOffset={80} style={styles.Geral}>
      
      <ScrollView>


        <View style={styles.imagem}>
          <Image style={styles.Logo}
            source={require('../src/imagem/logo3.png')}
          />
        </View>
        

        <View style={styles.inputemail}> 
          <TextInput 
            value={email}
            style={styles.coremail}   
            placeholder = "Digite seu email... "
            autoCorrect = {false}
            onChangeText = {setEmail}
          /> 
        </View>


        <View style={styles.inputsenha}> 
          <TextInput
            value={senha}
            style={styles.corsenha}         
            placeholder = "Digite sua senha... "
            autoCorrect = {false}
            onChangeText = {setSenha}
          />      
        </View>

        
        <TouchableOpacity style={styles.botao} onPress = {validacaoLogin}>
          <Text style={styles.botaoEntrar}> Entrar </Text>
        </TouchableOpacity>
        
        
        <View>  
          <TouchableOpacity style = {styles.criarconta} onPress = {
            () => { 
              navigation.navigate("casa")}
            }>

            <Text style = {styles.criarcontatexto}>Crie sua conta.</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>

    </KeyboardAvoidingView>
  )
}


export default Login;