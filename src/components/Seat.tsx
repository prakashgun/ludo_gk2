import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Token from './Token'

const getSeatStyle = (color: string) => {
  if(color == 'red'){
    return styles.redSeat
  }else if(color == 'green'){
    return styles.greenSeat
  }else if(color == 'blue'){
    return styles.blueSeat
  }else{
    return styles.yellowSeat
  }
}

const Seat = ({color}:any) => {
  return (
    <View style={[styles.seat, getSeatStyle(color)]}>
        <Token color={color} size={9} />
    </View>
  )
}

export default Seat

const styles = StyleSheet.create({
  seat:{
    height: 26,
    width: 26,
    borderRadius:13,
    margin: 9,
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap"
},
redSeat: {
    backgroundColor: "#EE1B26"
},
greenSeat: {
    backgroundColor: "#00A04A"
},
blueSeat: {
    backgroundColor: "#24AEFE"
},
yellowSeat: {
    backgroundColor: "#FFDE17"
}
})