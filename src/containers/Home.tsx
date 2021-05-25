import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation';
import {Colors} from '../consts';
import {Button} from '../components';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home = (props: Props) => {
  const onPress = () => {
    console.log('pressed');
  };
  return (
    <View style={styles.view}>
      <Button onPress={onPress} label={"Press me"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.BCKG.hex,
  },
});
