import React from 'react'
import { StyleSheet, View } from 'react-native'

const Destination = () => {
  return (
    <View style={styles.container}>
      <View style={styles.destination} />
    </View>
  )
}

export default Destination

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    flex: 1
  },
  // Pacman style modified from https://www.codedaily.io/tutorials/The-Shapes-of-React-Native
  destination: {
    width: 0,
    height: 0,
    borderTopWidth: 50,
    borderTopColor: "#60eb9a",
    borderLeftColor: "#ed8290",
    borderLeftWidth: 40,
    borderRightColor: "#e0db4c",
    borderRightWidth: 40,
    borderBottomColor: "#4ca2e0",
    borderBottomWidth: 52
  }
})