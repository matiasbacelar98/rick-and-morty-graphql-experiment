import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './context';
import client from './config';

import { Container, Header } from './components';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Header />
        <Container>
          <h1 className='text-3xl font-bold underline'>Working...</h1>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}
