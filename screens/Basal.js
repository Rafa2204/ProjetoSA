import react from "react";
import React, {useState, useEffect} from "react";
import {View, CheckBox, TouchableOpacity, ScrollView, Input, Text, TextInput, StyleSheet, KeyboardAvoidingView, Image, Alert} from "react-native"
import axios from "axios"



const styles = StyleSheet.create({
  Geral:{
   },

   imagemfundo:{
    width:500,
    height:1000,
     marginTop:55
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
       marginTop:-1055
       
        
    },

    TelaPrincipal:{
        marginTop: 50, 
        color: 'black' , 
        fontSize: 30, 
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
        fontSize:30, 
        
    }, 

    digitesuaaltura:{
        marginTop:10, 
        fontSize:17, 
        textAlign: 'center',
        color:'white', 
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
          marginTop: 40,
          backgroundColor: '#0066ff', 
          alignItems: 'center', 
          padding: 20, 
          margin: 100,
          borderRadius: 5
           
    },
        
    botaoEntrar:{
        color:'white', 
          
    },

    viewimc:{ 
      backgroundColor: 'rgba(0,0,0,0.7)',
      height:140, 
      width:350, 
      marginLeft:23,
      borderRadius:10, 
      marginTop:30
  },
  

    sexoMouF :{
        borderBottomColor: 'white',
        backgroundColor:'#c6c4c4',
        borderRadius:5,
        width:120,
        height: 53, 
        marginLeft:110,
        marginTop:15, 
        color:'black', 
        fontSize:25, 
        alignContent:'center'
        
    
    },

    viewsexo:{
      backgroundColor: 'rgba(0,0,0,0.7)',
      height:130, 
      width:350, 
      marginLeft:23,
      borderRadius:10, 
      marginTop:25
  },
  result:{
    color:'white', 
    width:348,
    marginLeft: 25,
    fontSize:20, 
    marginTop:-80, 
    backgroundColor: 'rgba(0,0,0,0.7)',
    textAlign:'center', 
    borderRadius:5,
    height:80
  },
  result2:{
    color:'white', 
    width:350,
    marginLeft:15,
    fontSize:35, 
    marginTop:-110, 
    // backgroundColor: 'rgba(0,0,0,0.7)',
    textAlign:'center', 
    borderRadius:5,
    height:155
  },
    

    

})


const Basal = ({ navigation }) => {

  const [altura, setAltura] = useState ("")
  const [peso, setPeso] = useState ("")
  const [idade, setIdade] = useState ("")
  const [sexo, setSexo] = useState ("")
  const [result2, setResult2] = useState (0)
  

  useEffect(() => {
    
  },[result2])


  let result = 0
  let result1 = 0
  let TMBsexoM = 66
  let TMBsexoF = 665

  function Calcular(){

    if(idade == "" || altura == "" || peso == "" || sexo == ""){
      Alert.alert("Preencher campo")
    }
    else if (sexo == "m" || sexo == "M") {
        result = TMBsexoM + (13.8 * Number(peso)) 

        result1 = result + (5 * Number(altura)) 

        setResult2(result1 - (6.8 * Number(idade)))

        alert("Seu TMB é de " + result2.toFixed(2))
    }
    else if (sexo == "f" || sexo == "F"){

        result = TMBsexoF + (13.8 * Number(peso)) 

        result1 = result + (5 * Number(altura)) 

        setResult2(result1 - (6.8 * Number(idade)))

        alert("Seu TMB é de " + result2.toFixed(2))
    }
    else{
        alert("Digite o sexo corretamente!")
    }
    } 



  return (
    <KeyboardAvoidingView behavior={"height"} keyboardVerticalOffset={80}  >

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
            <Text style={styles.TelaPrincipal}> Taxa de Metabolismo Basal.  </Text>
        </View>

        <View style={styles.viewimc}>

          <Text style={styles.digitesuaaltura}> Digite sua idade. </Text>

          <TextInput style={styles.inputaltura}              
              value= {idade}
              placeholder = ""
              autoCorrect = {false}
              onChangeText = {setIdade}
          >           
          </TextInput>

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
            
        <View style={styles.viewsexo}>

            <Text style={styles.digitesuaaltura}> Sexo M ou F apenas. </Text>

            <TextInput style={styles.sexoMouF} 
            value= {sexo}
            placeholder = ""
            autoCorrect = {false}
            onChangeText = {setSexo}
            >


            </TextInput>
        </View>

        <View>
          <TouchableOpacity style={styles.botao} onPress={Calcular}

          >
          <Text style={styles.botaoEntrar}>Calcular </Text>
          </TouchableOpacity>
        </View>


        <View>
          <TextInput style={styles.result}> 
          <Text style={styles.result2}> Seu Basal é: {result2.toFixed(2)} </Text>                      
          </TextInput>
        </View>


       </ScrollView>
      </KeyboardAvoidingView>
    )
  }
  
  
  export default Basal;

