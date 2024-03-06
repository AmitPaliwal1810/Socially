import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  AuthScreen,
  Dashboard,
  Facebook,
  FlashScreen,
  HomeScreen,
  Instagram,
  Twitter,
} from './scr';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/">
        <Stack.Screen
          name="/"
          component={FlashScreen}
          options={{
            title: 'Flash Screen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="/auth"
          component={AuthScreen}
          options={{
            title: 'Auth Screen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="/Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="/facebook"
          component={Facebook}
          options={{
            title: 'Step Tracker',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="/instagram"
          component={Instagram}
          options={{
            title: 'Calories Tracker',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="/twitter"
          component={Twitter}
          options={{
            title: 'Water Tracker',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="/dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
