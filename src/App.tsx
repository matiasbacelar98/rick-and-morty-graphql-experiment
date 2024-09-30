import { ErrorBoundary } from 'react-error-boundary';
import { ApolloProvider } from '@apollo/client';

import { ThemeProvider } from './context';

import client from './config';

import { CharacterPage, Header, ErrorMessage } from './components';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorMessage}>
          <CharacterPage />
        </ErrorBoundary>
      </ThemeProvider>
    </ApolloProvider>
  );
}
