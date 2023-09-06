import React from 'react'
import { StyleSheet, View } from 'react-native'
import BluePath from './BluePath'
import Destination from './Destination'
import GreenPath from './GreenPath'
import House from './House'
import RedPath from './RedPath'
import YellowPath from './YellowPath'
import Path from './Path'

const GameBox = ({ style }: any) => {
    return (
        <View style={style}>
            <View style={styles.firstRow}>
                <House color="red" />
                <Path color="green" />
                <House color="green" />
            </View>
            <View style={styles.secondRow}>
                <Path color="red" />
                <Destination />
                <Path color="yellow" />
            </View>
            <View style={styles.thirdRow}>
                <House color="blue" />
                <Path color="blue" />
                <House color="yellow" />
            </View>
        </View>
    )
}

export default GameBox

const styles = StyleSheet.create({
    firstRow: {
        flex: 2,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "black"
    },
    secondRow: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "black"
    },
    thirdRow: {
        flex: 2,
        flexDirection: "row"
    }
})