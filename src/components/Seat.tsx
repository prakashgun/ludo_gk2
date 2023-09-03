import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Token from './Token'

const Seat = ({style, seatStyle}:any) => {
  return (
    <View style={[seatStyle]}>
        <Token seatStyle={seatStyle} />
    </View>
  )
}

export default Seat

const styles = StyleSheet.create({

})