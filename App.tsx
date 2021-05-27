import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RootDrawer} from './src';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={styles.view}>
      <RootDrawer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default App;
