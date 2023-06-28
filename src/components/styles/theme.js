import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { buttonStyle, centerStyle, textStyle } from './';
import { global } from './global';
import { fonts } from './fonts';

export const theme = extendTheme({
  colors: colors,
  styles: { global: global },
  fonts: fonts,
  components: {
    Button: buttonStyle,
    Center: centerStyle,
    Text: textStyle,
  },
});
