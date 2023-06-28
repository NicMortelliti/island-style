import { defineStyleConfig } from '@chakra-ui/react';

export const centerStyle = defineStyleConfig({
  baseStyle: {},
  variant: {
    center: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      bg: 'brand.accent',
    },
  },
  defaultProps: {
    variant: 'center',
  },
});
