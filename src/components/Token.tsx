import React from 'react';
import { View, StyleSheet } from 'react-native';

const Token = ({ color }:any) => {
  const size =10
  const tokenStyles = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return <View style={[styles.token, tokenStyles]}>
    <View style={styles.innerCircle} />
  </View>
};

const styles = StyleSheet.create({
  token: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 1
  },
  innerCircle: {
    width: '30%', // Adjust the size of the inner white circle as needed
    height: '30%',
    backgroundColor: 'white',
  }
});

export default Token;
