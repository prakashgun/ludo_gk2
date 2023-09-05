import React from 'react';
import { View, StyleSheet } from 'react-native';

const Token = ({ color }:any) => {
  const size =8
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
    width: '60%', // Adjust the size of the inner white circle as needed
    height: '60%',
    backgroundColor: 'white',
  }
});

export default Token;
