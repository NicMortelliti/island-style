import { Grid, GridItem } from '@chakra-ui/react';
import { Header, Main, Footer } from './components';

export const App = () => {
  const Layout = () => (
    <Grid
      templateAreas={`"header"
                  "main"
                  "footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'1fr'}
      minH='100vh'
      color='blackAlpha.700'
      fontWeight='bold'>
      <GridItem pl='2' bg='orange.300' area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <Main />
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );

  return <Layout />;
};
