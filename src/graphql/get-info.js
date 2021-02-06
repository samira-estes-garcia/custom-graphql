import gql from 'graphql-tag';

export const GET_INFO = gql`
{
    posts {
      title
      description
      author {
        name
        age
      }
    }
  }
`