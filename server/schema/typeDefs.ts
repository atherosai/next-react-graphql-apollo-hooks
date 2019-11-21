import { gql } from 'apollo-server-express';

const typeDefs = gql`
type Subscription {
    id: ID!
    email: String!
}

input SubscribeInput {
    email: String!
}

type Mutation {
    subscribe(input: SubscribeInput!): Subscription!
}

type Query {
    subscriptions: [Subscription]
}`;

export default typeDefs;
