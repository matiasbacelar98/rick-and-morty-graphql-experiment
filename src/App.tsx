import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './context';
import client from './config';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <h1 className='text-3xl font-bold underline'>Working...</h1>
      </ThemeProvider>
    </ApolloProvider>
  );
}
