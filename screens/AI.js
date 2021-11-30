import react from "react";
import React, {useState, useEffect} from "react";
import {View, TouchableOpacity, ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Image, Alert} from "react-native"
import axios from "axios"



const styles = StyleSheet.create({
  Geral:{
   
       
   },

   imagemfundo:{
    width:500,
    height:800,
    // marginTop:100
  }, 
   
    botaovoltar:{
        width:35, 
        height:35, 
        marginTop:10, 
        marginLeft:10
    }, 

    aba:{
      backgroundColor:'black', 
      width:550, 
      height:55,
       marginTop:-800
       
        
    },

    TelaPrincipal:{
        marginTop: 55, 
        color: 'black' , 
        fontSize: 25, 
        textAlign: 'center'
    }, 

    inputaltura:{
        borderBottomColor: 'white',
        backgroundColor:'#c6c4c4',
        borderRadius:5,
        width:310,
        height: 53, 
        marginLeft:19,
        marginTop:25, 
        color:'black', 
        fontSize:20
    },

    textaltura:{
        fontSize:20, 
        
    }, 

    digitesuaaltura:{
        marginTop:10, 
        fontSize:17, 
        textAlign: 'center',
        color:'white', 
        marginTop:15
        
        },

    viewimc:{
      backgroundColor: 'rgba(0,0,0,0.7)',
        height:140, 
        width:350, 
        marginLeft:23,
        borderRadius:10, 
        marginTop:15
    },
    
    viewimc2:{
        backgroundColor:'blue', 
        height:140, 
        width:380, 
        marginLeft:7,
        borderRadius:10, 
        marginTop:15
    },

    inputaltura2:{
        borderBottomColor: 'white',
        backgroundColor:'gray',
        borderRadius:5,
        width:350, 
        marginLeft:15,
        marginTop:25, 
        color:'black', 
        fontSize:20
    },

    digitesuaaltura2:{
        marginTop:10, 
        fontSize:17, 
        textAlign: 'center',
        color:'white', 
        marginTop:15
        
        },

        botao: {
          width: 310, 
          height: 60,
          marginLeft: 45, 
          marginTop: 30,
          backgroundColor: '#0066ff', 
          alignItems: 'center', 
          padding: 20, 
          margin: 179,
          borderRadius: 5
           
        },
        
        botaoEntrar:{
          color:'white', 
          
        },

        setinputaltura:{
          fontSize:25,
          color:'black',
          marginTop:50
        },

        result:{
          color:'white', 
          width:348,
          marginLeft: 25,
          fontSize:20, 
          marginTop:-250, 
          backgroundColor: 'rgba(0,0,0,0.7)',
          textAlign:'center', 
          borderRadius:5,
          height:80
        },
        result2:{
          color:'white', 
          width:350,
          marginLeft:15,
          fontSize:21, 
          marginTop:-110, 
          // backgroundColor: 'rgba(0,0,0,0.7)',
          textAlign:'center', 
          borderRadius:5,
          height:155
        },
      
      

})


const AI = ({ navigation }) => {

  const [altura, setAltura] = useState ("")
  const [peso, setPeso] = useState ("")
  const [result, setResult] = useState (0)
  

  useEffect(() => {
    
  },[result])
  
    
    // let result1 = 0

  function Calcular(){

    if(altura == "" || peso == ""){
      Alert.alert("Preencher campo")
    }
    else{

        setResult(peso * 35)

        
        alert(result + (" Litros de água"))
      
       
    }
    
  } 



  return (
    <KeyboardAvoidingView behavior={"height"} keyboardVerticalOffset={80}>

      <ScrollView style={styles.Geral}>
        
        <Image 
          style={styles.imagemfundo}
          source ={require('../src/imagem/alimentosHomeFundo.jpg')} 
        />

  
        <View style={styles.aba}>
         
          <TouchableOpacity onPress={
              () => {
              navigation.navigate("home")}
          }>
          <Image 
            style={styles.botaovoltar}
            source ={require('../src/imagem/VoltarTelaHome1.png')} 
          /> 
          </TouchableOpacity>
        </View>
    

        <View>  
          <Text style={styles.TelaPrincipal}> Água deve Ingerir.  </Text>
        </View>


        <View style={styles.viewimc}>

          <Text style={styles.digitesuaaltura}> Digite sua altura. </Text>

          <TextInput style={styles.inputaltura}              
              value= {altura}
              placeholder = ""
              autoCorrect = {false}
              onChangeText = {setAltura}
          >           
          </TextInput>

      
        </View>
        

        <View style={styles.viewimc}>
          
        <Text style={styles.digitesuaaltura}> Digite seu peso. </Text>

          <TextInput style={styles.inputaltura}
              value= {peso}
              placeholder = ""
              autoCorrect = {false}
              onChangeText = {setPeso}
          >
           

          </TextInput>
  
        </View>

        <View>
          <TouchableOpacity style={styles.botao} onPress={Calcular}

          >
          <Text style={styles.botaoEntrar}> Calcular </Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <TextInput  style={styles.setinputaltura}
          onChangeText={setAltura}
          >

          </TextInput>

        </View>


        <View>
          <TextInput style={styles.result}> 
          <Text style={styles.result2}> Você deve ingerir {result.toFixed(2)}L Diarios</Text>                      
          </TextInput>
        </View>
        

       </ScrollView>
      </KeyboardAvoidingView>
    )
  }
  
  
  export default AI;

