import { defineStyleConfig } from '@chakra-ui/react';

export const buttonTheme = defineStyleConfig({
  baseStyle: {},
  variants: {
    solid: {
      bg: 'brand.accent',
    },
  },
  defaultProps: {
    variant: 'solid',
  },
});
