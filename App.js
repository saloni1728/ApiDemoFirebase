/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Camera } from './src/components/Camera';
import { Register } from './src/components/Register';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Profile } from './src/components/Rename';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/Home';
import thunk from 'redux-thunk';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Reducer from './src/state/reducer';
import { Todos } from './src/components/Todos';



const App=() => {
  const store=createStore(Reducer,applyMiddleware(thunk));
  // const StackNavigator = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
      // <Camera/>
      <Provider store={store}>
        <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Register' component={Register} />
          <Drawer.Screen name='Profile' component={Profile} />
          <Drawer.Screen name='Camera' component={Camera} />
          <Drawer.Screen name='Todos' component={Todos}/>
        </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
      
  );
};



export default App;
