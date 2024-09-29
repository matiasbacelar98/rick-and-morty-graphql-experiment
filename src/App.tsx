import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './context';
import client from './config';

import { CharacterPage, Header } from './components';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Header />
        <CharacterPage />
      </ThemeProvider>
    </ApolloProvider>
  );
}
