import React from 'react'
import { StyleSheet, View } from 'react-native'
import SeatBox from './SeatBox'

const getHouseStyle = (color: string) => {
  if (color == 'red') {
    return styles.redHouse
  } else if (color == 'green') {
    return styles.greenHouse
  } else if (color == 'blue') {
    return styles.blueHouse
  } else {
    return styles.yellowHouse
  }
}

const House = ({ color }: any) => {
  return (
    <View style={[styles.house, getHouseStyle(color)]}>
      <SeatBox color={color} />
    </View>
  )
}

export default House

const styles = StyleSheet.create({
  house: {
    borderColor: "black",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  redHouse: {
    backgroundColor: "#ed8290",
    borderRightWidth: 1
  },
  greenHouse: {
    backgroundColor: "#60eb9a"
  },
  blueHouse: {
    backgroundColor: "#4ca2e0",
    borderRightWidth: 1
  },
  yellowHouse: {
    backgroundColor: "#e0db4c"
  }
})