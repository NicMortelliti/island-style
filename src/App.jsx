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
      minH='100vh'>
      <GridItem area={'header'}>
        <Header />
      </GridItem>
      <GridItem area={'main'}>
        <Main />
      </GridItem>
      <GridItem area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );

  return <Layout />;
};
