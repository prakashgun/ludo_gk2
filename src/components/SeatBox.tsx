import React from 'react'
import { StyleSheet, View } from 'react-native'
import Seat from './Seat'

const SeatBox = ({ color }: any) => {
    return (
        <View style={styles.seatBox}>
            <View style={styles.firstRow}>
                <Seat color={color} />
                <Seat color={color} />
            </View>
            <View style={styles.secondRow}>
                <Seat color={color} />
                <Seat color={color} />
            </View>
        </View>
    )
}

export default SeatBox

const styles = StyleSheet.create({

    seatBox: {
        width: "60%",
        height: "60%",
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1
    },
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