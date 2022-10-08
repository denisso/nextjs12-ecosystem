/**
 * https://www.apollographql.com/docs/react/get-started
 */

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
} from "@apollo/client";

const client = new ApolloClient({
    uri: "https://flyby-gateway.herokuapp.com/",
    cache: new InMemoryCache(),
});

interface IFetch {}

export const fetchGQL: IFetch = { test: async () => {} };

interface IFetch {
    test: () => void;
}
fetchGQL.test = async () => {
    return client
        .query({
            query: gql`
                query GetLocations {
                    locations {
                        id
                        name
                        description
                        photo
                    }
                }
            `,
        })
        // .then((result) => console.log(result));
};
