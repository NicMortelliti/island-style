import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { buttonTheme } from './Button';
import { centerTheme } from './Center';
import { global } from './global';
import { fonts } from './fonts';

export const theme = extendTheme({
  colors: colors,
  styles: { global: global },
  fonts: fonts,
  components: {
    Button: buttonTheme,
    Center: centerTheme,
  },
});
