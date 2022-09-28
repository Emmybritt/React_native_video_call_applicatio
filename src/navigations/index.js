import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CallScreen from '../screens/CallScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from '../screens/ContactScreen';
import CallingScreen from '../screens/CallingScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'login'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Call"
          component={CallScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Calling"
          component={CallingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InCommingCalling"
          component={IncomingCallScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
