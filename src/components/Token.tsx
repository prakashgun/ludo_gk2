import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const Token = ({style, seatStyle}:any) => {
  return (
    <View style={styles.container}>
        <AntDesign name="enviroment" size={14} color="black" />
    </View>
  )
}

export default Token

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5
      }
})