import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from '../../screens/auth';
import RegisterScreen from '../../screens/auth/register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '559858700111-goig7p7vq2nlhkhigc64gvlbgsefsvj9.apps.googleusercontent.com',
      offlineAccess: true,
    });
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'OnBoard';
  } else {
    routeName = 'Sign In';
  }
  return (
    <Stack.Navigator
      initialRouteName={routeName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Sign In'} component={LogInScreen} />

      <Stack.Screen name={'Sign Up'} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
