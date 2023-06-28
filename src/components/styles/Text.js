import { defineStyleConfig } from '@chakra-ui/react';

export const textStyle = defineStyleConfig({
  baseStyle: {},
  variant: {
    footer: { fontSize: 'xs' },
  },
  defaultProps: {
    variant: 'footer',
  },
});
