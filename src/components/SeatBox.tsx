import React from 'react'
import { StyleSheet, View } from 'react-native'
import Seat from './Seat'

const SeatBox = ({ style, seatStyle }: any) => {
    return (
        <View style={style}>
            <View style={styles.firstRow}>
                <Seat seatStyle={seatStyle} />
                <View style={seatStyle}></View>
            </View>
            <View style={styles.secondRow}>
                <View style={seatStyle}></View>
                <View style={seatStyle}></View>
            </View>
        </View>
    )
}

export default SeatBox

const styles = StyleSheet.create({
    firstRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    secondRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})