import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Botoes = (props) => {
  return (
      <TouchableOpacity style={style.botao}
      onPress={props.evento}>
        <Text style={style.textoBotao}>{props.nomeBotao}</Text>
      </TouchableOpacity>
  )
}

// github.com/oliveiramb

const style = StyleSheet.create({
    botao: {
        width: 100,
        heigth: 100,
        backgroundColor: "#000",
        padding: 12,
        alignItems: "center",
        margin: 10
    },
    textoBotao: {
      color: "#fff"
    }
})

export default Botoes;