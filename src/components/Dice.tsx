import React from 'react';
import { View, StyleSheet } from 'react-native';

const Dice = () => {
  return (
    <View style={styles.dice}>
      <View style={styles.row}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View style={styles.row}>
        <View style={styles.dot} />
        <View style={styles.centerDot} /> 
        <View style={styles.dot} />
      </View>
      <View style={styles.row}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dice: {
    width: 50, // Half the width
    height: 50, // Half the height
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1, // Reduce the border width
    borderRadius: 5, // Reduce the border radius
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  dot: {
    width: 7.5, // Half the dot size
    height: 7.5, // Half the dot size
    backgroundColor: 'black',
    borderRadius: 3.75, // Half the border radius
    margin: 2.5, // Half the margin
  },
  centerDot: {
    width: 7.5, // Normal dot size
    height: 7.5, // Normal dot size
    backgroundColor: 'black',
    borderRadius: 3.75, // Normal border radius
    margin: 2.5, // Normal margin
  },
});

export default Dice;
