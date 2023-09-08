import React from 'react'
import { StyleSheet, View } from 'react-native'

const getCellStyle = (color: string) => {
  if (color == 'red') {
    return styles.redCell
  } else if (color == 'green') {
    return styles.greenCell
  } else if (color == 'blue') {
    return styles.blueCell
  } else if (color == 'yellow') {
    return styles.yellowCell
  } else {
    return styles.whiteCell
  }
}

const Cell = ({ color }: any) => {
  return (
    <View style={[styles.cell, getCellStyle(color)]}>

    </View>
  )
}

export default Cell

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  whiteCell: {
    backgroundColor: "white"
  },
  redCell: {
    backgroundColor: "#ed8290",
  },
  greenCell: {
    backgroundColor: "#60eb9a",
    flexDirection: "row"
  },
  blueCell: {
    backgroundColor: "#4ca2e0",
    flexDirection: "row"
  },
  yellowCell: {
    backgroundColor: "#e0db4c",
  }
})