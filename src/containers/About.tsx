import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const About = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.name}>Tomas Tamagnone</Text>
      <Text style={styles.title}>Mobile developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
});
