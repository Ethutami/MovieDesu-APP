/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from './AboutScreen';

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="About"
            component={About}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
