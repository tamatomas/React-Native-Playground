import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, About} from '../containers';
import {Icon} from '../components';
import {RootStack} from './RootStack';
import {StyleSheet} from 'react-native';
import {Colors} from '../consts';

export type DrawerStackParamList = {
  Home: undefined;
  About: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export const RootDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleStyle: styles.title,
          headerStyle: styles.header,
          drawerIcon: () => (
            <Icon from={'Feather'} iconProps={{name: 'menu', size: 24}} />
          ),
        }}
        initialRouteName={'Home'}>
        <Drawer.Screen name={'Home'} component={RootStack} />
        <Drawer.Screen name={'About'} component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: Colors.GREY_DARK.hex,
    borderBottomWidth: 2,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    paddingTop: 4,
  },
});

export * from './RootStack';
