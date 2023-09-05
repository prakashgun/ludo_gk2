import React from 'react';
import { View, StyleSheet } from 'react-native';

const Token = ({ color, size }:any) => {
  const tokenStyles = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return <View style={[styles.token, tokenStyles]} />;
};

const styles = StyleSheet.create({
  token: {
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default Token;
