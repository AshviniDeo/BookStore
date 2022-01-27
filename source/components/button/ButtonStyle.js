import {StyleSheet} from 'react-native';
import {BUTTON, FONTSIZES} from '../../res/GlobalStyle';
export const styles = StyleSheet.create({
  button: {
    marginHorizontal: BUTTON.marginHorizontal,
    height: BUTTON.buttonHeight,
    borderRadius: BUTTON.buttonRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: BUTTON.marginVertical,
  },
  button_text: {
    fontSize: FONTSIZES.buttonFont,
    fontWeight: 'bold',
  },
});
