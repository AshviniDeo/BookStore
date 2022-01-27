import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR} from '../../res/GlobalStyle';
import {styles} from './ButtonStyle';

const Button = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onClick}>
        <LinearGradient
          colors={[COLOR.primary, COLOR.lightsalmon]}
          style={[styles.button, {backgroundColor: props.color}]}>
          <Text style={[styles.button_text, {color: props.textColor}]}>
            {props.title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
