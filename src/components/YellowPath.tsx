import React from 'react'
import { StyleSheet, View } from 'react-native'
import Cell from './Cell'

const YellowPath = ({ style }: any) => {
    return (
        <View style={style}>
            <View style={styles.panel}>
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
            </View>

            <View style={styles.panel}>
                <Cell color="yellow" />
                <Cell color="yellow" />
                <Cell color="yellow" />
                <Cell color="yellow" />
                <Cell color="yellow" />
                <Cell color="white" />
            </View>

            <View style={styles.panel}>
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="yellow" />
                <Cell color="white" />
            </View>
        </View>
    )
}

export default YellowPath

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: "row"
    },
    cell: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black"
    },
    whiteCell: {
        backgroundColor: "white"
    }
})