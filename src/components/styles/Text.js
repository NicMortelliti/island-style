import { defineStyleConfig } from '@chakra-ui/react';

export const textStyle = defineStyleConfig({
  variants: {
    body: { fontSize: 'md' },
    footer: { fontSize: 'xs', fontWeight: 'lighter' },
  },
  defaultProps: {
    variant: 'body',
  },
});
