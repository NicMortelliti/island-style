import { defineStyleConfig } from '@chakra-ui/react';

export const buttonStyle = defineStyleConfig({
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
