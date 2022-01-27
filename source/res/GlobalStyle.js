import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const COLOR = {
  // base colors
  primary: '#F96D41',
  secondary: '#25282F',
  lightsalmon: '#ffa07a',
  black: '#1E1B26',
  white: '#FFFFFF',
  lightGray: '#64676D',
  lightGray2: '#EFEFF0',
  lightGray3: '#D4D5D6',
  lightGray4: '#7D7E84',
  gray: '#2D3038',
  gray1: '#282C35',
  darkRed: '#31262F',
  lightRed: '#C5505E',
  darkBlue: '#22273B',
  lightBlue: '#424BAF',
  darkGreen: '#213432',
  lightGreen: '#31Ad66',
  googleBtn: 'rgb(225,0,0)',
  btnColor: 'rgba(225,0,0,0.3)',
};

export const BUTTON = {
  buttonRadius: widthPercentageToDP('6%'),
  buttonHeight: heightPercentageToDP('7%'),
  marginHorizontal: widthPercentageToDP('5%'),
  marginVertical: widthPercentageToDP('2%'),
};

export const FONTSIZES = {
  buttonFont: widthPercentageToDP('5%'),
  titleText: widthPercentageToDP('7%'),
};

export const MARGIN = {
  margin: widthPercentageToDP('3%'),
};

export const PADDING = {
  padding: widthPercentageToDP('5%'),
};
