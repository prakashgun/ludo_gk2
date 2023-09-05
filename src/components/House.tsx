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
    backgroundColor: "#EE1B26",
    borderRightWidth: 1
  },
  greenHouse: {
    backgroundColor: "#00A04A"
  },
  blueHouse: {
    backgroundColor: "#24AEFE",
    borderRightWidth: 1
  },
  yellowHouse: {
    backgroundColor: "#FFDE17"
  }
})