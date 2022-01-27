import {View, ImageBackground, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './SplashStyle';
import * as Animatable from 'react-native-animatable';
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bgImage.png')}
        style={styles.background}>
        <Animatable.View animation={'fadeInDownBig'}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={styles.logo}
          />
          <Text style={styles.text}>Book Store</Text>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
