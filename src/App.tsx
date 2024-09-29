import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './context';
import client from './config';

import { Container, Header, CharacterList } from './components';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Header />
        <Container>
          <CharacterList />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}
