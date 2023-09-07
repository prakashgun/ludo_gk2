import React from 'react'
import { StyleSheet, View } from 'react-native'
import Cell from './Cell'

const GreenPath = () => {
    return (
        <View style={[styles.colorPath, styles.greenPath]}>
            <View style={styles.verticalPanel}>
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
            </View>

            <View style={styles.verticalPanel}>
                <Cell color="white" />
                <Cell color="green" />
                <Cell color="green" />
                <Cell color="green" />
                <Cell color="green" />
                <Cell color="green" />
            </View>

            <View style={styles.verticalPanel}>
                <Cell color="white" />
                <Cell color="green" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
            </View>
        </View>
    )
}

const BluePath = () => {
    return (
        <View style={[styles.colorPath, styles.bluePath]}>
            <View style={styles.verticalPanel}>
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="blue" />
                <Cell color="white" />
            </View>

            <View style={styles.verticalPanel}>
                <Cell color="blue" />
                <Cell color="blue" />
                <Cell color="blue" />
                <Cell color="blue" />
                <Cell color="blue" />
                <Cell color="white" />
            </View>

            <View style={styles.verticalPanel}>
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
            </View>
        </View>
    )
}

const RedPath = () => {
    return (
        <View style={[styles.colorPath, styles.redPath]}>
            <View style={styles.horizontalPanel}>
                <Cell color="white" />
                <Cell color="red" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
            </View>

            <View style={styles.horizontalPanel}>
                <Cell color="white" />
                <Cell color="red" />
                <Cell color="red" />
                <Cell color="red" />
                <Cell color="red" />
                <Cell color="red" />

            </View>

            <View style={styles.horizontalPanel}>
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
            </View>
        </View>
    )
}

const YellowPath = () => {
    return (
        <View style={[styles.colorPath, styles.yellowPath]}>
            <View style={styles.horizontalPanel}>
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
                <Cell color="white" />
            </View>

            <View style={styles.horizontalPanel}>
                <Cell color="yellow" />
                <Cell color="yellow" />
                <Cell color="yellow" />
                <Cell color="yellow" />
                <Cell color="yellow" />
                <Cell color="white" />
            </View>

            <View style={styles.horizontalPanel}>
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

const getColorPath = (color: string) => {
    if (color == 'red') {
      return <RedPath />
    } else if (color == 'green') {
      return <GreenPath />
    } else if (color == 'blue') {
      return <BluePath />
    } else {
      return <YellowPath />
    }
  }


const Path = ({color}:any) => {
  return getColorPath(color)
}

export default Path

const styles = StyleSheet.create({
    verticalPanel: {
        flex: 1
    },
    horizontalPanel:{
        flex:1,
        flexDirection:"row"
    },
    colorPath: {
        borderColor: "black",
        flexWrap: "nowrap"
    },
    greenPath: {
        backgroundColor: "#00A04A",
        flex: 1,
        borderRightWidth: 1,
        flexDirection: "row"
    },
    redPath: {
        backgroundColor: "#FFCCCB",
        flex: 2,
        borderRightWidth: 1
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
})