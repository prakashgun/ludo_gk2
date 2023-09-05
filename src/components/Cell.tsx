import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const getCellStyle = (color: string) => {
  if(color == 'red'){
    return styles.redCell
  }else if(color == 'green'){
    return styles.greenCell
  }else if(color == 'blue'){
    return styles.blueCell
  }else if(color == 'yellow'){
    return styles.yellowCell
  }else{
    return styles.whiteCell
  }
}


const Cell = ({color}:any) => {
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
    borderColor: "black"
},
whiteCell: {
    backgroundColor: "white"
},
redCell: {
  backgroundColor: "#EE1B26",
  // flex: 2,
  // borderRightWidth:1
},
greenCell: {
  backgroundColor: "#00A04A",
  flex: 1,
  borderRightWidth:1,
  flexDirection:"row"
},
blueCell: {
  backgroundColor: "#24AEFE",
  // flex: 1,
  borderRightWidth:1,
  flexDirection:"row"
},
yellowCell: {
  backgroundColor: "#FFDE17",
  // flex: 2,
  borderLeftWidth: 1
}
})