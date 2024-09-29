import { ApolloProvider } from '@apollo/client';
import client from './config';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <h1 className='text-3xl font-bold underline'>Working...</h1>
    </ApolloProvider>
  );
}
