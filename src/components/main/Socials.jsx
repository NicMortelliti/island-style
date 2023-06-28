import { Center, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export const Socials = () => {
  return (
    <Center>
      <IconButton aria-label='Facebook' icon={<FaFacebook />} />
      <IconButton aria-label='Instragram' icon={<FaInstagram />} />
    </Center>
  );
};
