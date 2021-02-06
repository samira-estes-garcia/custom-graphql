import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client'
import { Container } from './containers/Container'

function App() {

  const client = new ApolloClient({
    uri: 'https://damp-stream-49299.herokuapp.com/graphql'
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <Container />
      </main>
    </ApolloProvider>
  );
}

export default App;