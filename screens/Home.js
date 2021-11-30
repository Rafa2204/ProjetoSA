import React from "react";
import {View, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Image, ScrollView} from "react-native"


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

  aba:{
    backgroundColor:'black', 
    width: 500, 
    height:60, 
    marginTop: -800
  }, 

  TelaPrincipal:{
    marginTop: 55, 
    color: 'white' , 
    fontSize: 25, 
    textAlign: 'center'
  }, 

  Viewtudo:{
    backgroundColor:'gray',
    width:373,
    margin:10,
    borderRadius:10 ,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },

  inputauteraremail:{
    marginTop: 150,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center', 
    width:310,
    height: 53, 
    backgroundColor: '#F0F8FF', 
    borderRadius: 5,
    marginLeft:45,
  }, 

  inputauterarsenha:{
    marginTop:15,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center', 
    width:310,
    height: 53, 
    backgroundColor: '#F0F8FF', 
    borderRadius: 5,
    marginLeft:45,
  }, 

  corauteraremail: {
    fontSize: 20,
    borderRadius: 5,
  }, 

  corauterarsenha: {
    fontSize: 20,
    borderRadius: 5,
  }, 

  botaoauterar:{
    width: 310, 
    height: 65,
    marginLeft:45, 
    marginTop: 20,
    backgroundColor: 'blue', 
    alignItems: 'center', 
    padding: 20, 
    margin: 10,
    borderRadius:5
  }, 

  botaoEntrar:{
    color:'white', 
    fontSize: 20,
  },

  imagemfundo:{
    width: 450,
    height: 800
  }, 

  iconforça:{
    width:55, 
    height:55
  }, 


  textimc:{
    color:'white', 
    marginTop: 20 ,  
    fontSize:25, 
    alignItems:'center',
  },

  textoimc:{
    fontSize:20, 
    color:'white', 
    margin:15, 
    marginTop:40, 
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0.7)', 
    borderRadius:5, 
    height:255, 
    alignItems:'center', 
    alignContent:'center',
    padding: 15,
  },

  botaoimc:{
    marginTop:0,
    marginLeft:17,
    alignItems:'center',
    backgroundColor: 'gray', 
    width:342, 
    height:80, 
    borderRadius:5,
    margin:20,
  },

  textotmb: {
    fontSize:20, 
    color:'white', 
    margin:15, 
    marginTop:40, 
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0.7)', 
    borderRadius:5, 
    height:272, 
    alignItems:'center', 
    alignContent:'center',
    padding: 15,
  },

  botaotmb: {
    marginTop:0,
    marginLeft:17,
    alignItems:'center',
    backgroundColor: 'gray', 
    width:342, 
    height:80, 
    borderRadius:5,
    margin:20,
  },

  botaopi:{
    marginTop:0,
    marginLeft:17,
    alignItems:'center',
    backgroundColor: 'gray', 
    width:342, 
    height:80, 
    borderRadius:5,
    margin:20,
  },

  textopi: {
    fontSize:20, 
    color:'white', 
    margin:15, 
    marginTop:40, 
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0.7)', 
    borderRadius:5, 
    height:207, 
    alignItems:'center', 
    alignContent:'center',
    padding: 15,
  },

  botaoia: {
    marginTop:0,
    marginLeft:17,
    alignItems:'center',
    backgroundColor: 'gray', 
    width:342, 
    height:80, 
    borderRadius:5,
    margin:80,
  },

  textoia: {
    fontSize:20, 
    color:'white', 
    margin:15, 
    marginTop:40, 
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0.7)', 
    borderRadius:5, 
    height:135, 
    alignItems:'center', 
    alignContent:'center',
    padding: 15,
  },

  Botaoalterar:{
    backgroundColor:'#a7a6a6',
    width:110,
    height:35, 
    marginLeft:265, 
    color:'white', 
    marginTop:-35, 
    borderRadius:5, 
    alignItems:'center',
    textAlign:'center',
  },

  textoalterar:{
    marginTop:5, 
    fontSize:16, 
    color:'white',
  },


})


const Home = ({ navigation }) => {


  return (
    <KeyboardAvoidingView style={styles.Geral} >
      
      
      <Image 
        style={styles.imagemfundo}
        source ={require('../src/imagem/alimentosHomeFundo.jpg')} 
      /> 


      <View style={styles.aba}>
        <TouchableOpacity onPress={
          () => {
            navigation.navigate("login")}
          }>

          <Image 
            style={styles.botaovoltar}
            source ={require('../src/imagem/VoltarTelaHome1.png')} 
          /> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.Botaoalterar}
          onPress={
          () => {
            navigation.navigate("al")}
          }>

          <Text style={styles.textoalterar}> Alterar conta </Text>
        </TouchableOpacity>
      </View>

    
      <ScrollView style={styles.Viewtudo}>


        <View>  
          <Text style={styles.TelaPrincipal}> Calculadora. </Text>
        </View>


        <View style={styles.viewbotaoimc}>
          <Text style={styles.textoimc}>    IMC é a sigla para Índice de Massa Corporal, 
            que é um cálculo que serve para avaliar se a pessoa está dentro do seu peso 
            ideal em relação à altura. Assim, de acordo com o valor do resultado de IMC, 
            a pessoa pode saber se está dentro do peso ideal, acima ou abaixo do peso 
            desejado. 
          </Text>

          <TouchableOpacity style={styles.botaoimc} onPress = {
            () => { 
              navigation.navigate("imc")}
            }>

            <Text style={styles.textimc}> Calcule seu IMC. </Text>
          </TouchableOpacity>
        </View>
        

        <View>
          <Text style={styles.textotmb}>   A taxa de metabolismo "padrão" de um animal é medida 
            como a taxa metabólica basal (TMB) para um endotérmico ou como a taxa metabólica 
            padrão (TMP) para um ectotérmico,a taxa metabólica varia com o nível de atividade 
            animais mais ativos têm uma taxa metabólica mais alta do que animais menos ativos.
          </Text>

          <TouchableOpacity style={styles.botaotmb} onPress = {
            () => { 
              navigation.navigate("basal")}
            }>

            <Text style={styles.textimc}> Calcule seu TMB. </Text>
          </TouchableOpacity>
        </View>


        <View>
          <Text style={styles.textopi}>O peso ideal é o peso que a pessoa deve ter para a sua 
            altura, sendo isso importante para evitar complicações como obesidade, hipertensão 
            e diabetes ou até mesmo a desnutrição, quando a pessoa está muito abaixo do peso.
          </Text>

          <TouchableOpacity style={styles.botaopi} onPress = {
            () => { 
              navigation.navigate("pi")}
            }>

            <Text style={styles.textimc}> Calcule seu PI. </Text>
          </TouchableOpacity>
        </View>


        <View>
          <Text style={styles.textoia}>   Quantidade de agua que deve ingerir no corpo por dia, 
          e medimos isso com o peso e a sua altura.
          </Text>

          <TouchableOpacity style={styles.botaoia} onPress = {
            () => { 
              navigation.navigate("ai")}
            }>

            <Text style={styles.textimc}> Calcule seu QA. </Text>
          </TouchableOpacity>
        </View>


      </ScrollView>  

    
    </KeyboardAvoidingView>
  )
}


export default Home;