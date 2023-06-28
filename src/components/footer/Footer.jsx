import { Center } from '@chakra-ui/react';
import { DesignBy, Legal } from './index';

export const Footer = () => {
  return (
    <>
      <Center>
        <Legal />
      </Center>
      <Center>
        <DesignBy />
      </Center>
    </>
  );
};
