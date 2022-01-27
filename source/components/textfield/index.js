import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './TextInputStyle';
import {COLOR} from '../../res/GlobalStyle';

const TextField = props => {
  return (
    <View>
      <TextInput
        style={styles.textBox}
        label={props.label}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        selectionColor={COLOR.primary}
        underlineColor={COLOR.primary}
        activeUnderlineColor={COLOR.primary}
        mode="flat"
        placeholder={props.placeholder}
      />

      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
};

export default TextField;
