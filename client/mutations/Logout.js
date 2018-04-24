import gql from 'graphql-gql';

export default gql`
    mutation {
        logout {
            id
            email
        }
    }
`;
