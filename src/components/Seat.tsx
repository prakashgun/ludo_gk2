import React from 'react'
import { StyleSheet, View } from 'react-native'
import Token from './Token'

const getSeatStyle = (color: string) => {
  if (color == 'red') {
    return styles.redSeat
  } else if (color == 'green') {
    return styles.greenSeat
  } else if (color == 'blue') {
    return styles.blueSeat
  } else {
    return styles.yellowSeat
  }
}

const Seat = ({ color }: any) => {
  return (
    <View style={[styles.seat, getSeatStyle(color)]}>
      <Token color={color} />
    </View>
  )
}

export default Seat

const styles = StyleSheet.create({
  seat: {
    height: 30,
    width: 30,
    borderRadius: 13,
    margin: 9,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  redSeat: {
    backgroundColor: "#FFCCCB"
  },
  greenSeat: {
    backgroundColor: "#90EE90"
  },
  blueSeat: {
    backgroundColor: "#ADD8E6"
  },
  yellowSeat: {
    backgroundColor: "#FFFDD0"
  }
})