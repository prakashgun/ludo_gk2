import React from 'react'
import { StyleSheet, View } from 'react-native'
import BluePath from './BluePath'
import Destination from './Destination'
import GreenPath from './GreenPath'
import House from './House'
import RedPath from './RedPath'
import YellowPath from './YellowPath'

const GameBox = ({ style }: any) => {
    return (
        <View style={style}>
            <View style={styles.firstRow}>
                <House color="red" />
                <GreenPath style={[styles.path, styles.greenPath]} />
                <House color="green" />
            </View>
            <View style={styles.secondRow}>
                <RedPath style={[styles.path, styles.redPath]} color="red" />
                <Destination style={styles.destination} />
                <YellowPath style={[styles.path, styles.yellowPath]} color="yellow" />
            </View>
            <View style={styles.thirdRow}>
                <House color="blue" />
                <BluePath style={[styles.path, styles.bluePath]} />
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
    },
    path: {
        borderColor: "black",
        flexWrap: "nowrap"
    },
    redPath: {
        backgroundColor: "#EE1B26",
        flex: 2,
        borderRightWidth: 1
    },
    greenPath: {
        backgroundColor: "#00A04A",
        flex: 1,
        borderRightWidth: 1,
        flexDirection: "row"
    },
    bluePath: {
        backgroundColor: "#24AEFE",
        flex: 1,
        borderRightWidth: 1,
        flexDirection: "row"
    },
    yellowPath: {
        backgroundColor: "#FFDE17",
        flex: 2,
        borderLeftWidth: 1
    },
    destination: {
        backgroundColor: "white",
        flex: 1,
    }
})