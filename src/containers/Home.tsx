import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation';
import {Colors} from '../consts';
import {Button} from '../components';
import {PADDING} from '../consts/Measures';

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
      <Button
        onPress={onPress}
        label={'Animated download button'}
        btnStyle={styles.btn}
        iconProps={{
          from: 'Feather',
          iconProps: {name: 'download', style: styles.icon, size: 22},
        }}
        iconPosition={'left'}
        showIcon
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.BCKG.hex,
    alignItems: 'center',
    padding: PADDING,
  },
  btn: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  icon: {
    color: Colors.WHITE.hex,
  },
});
