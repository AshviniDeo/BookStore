import React, {useState, useEffect, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/splashscreen';
import AuthStack from './auth/index';
import {LogBox} from 'react-native';

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const getUid = useCallback(async () => {
    const val = await AsyncStorage.getItem('uid');

    setIsLoading(false);
  }, []);

  useEffect(() => {
    getUid();
    LogBox.ignoreAllLogs(true);
  }, [getUid]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
