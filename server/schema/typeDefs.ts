import { gql } from 'apollo-server-express';

const typeDefs = gql`
enum SourceEnum {
  ARTICLE
  HOME_PAGE
}

type Subscription {
    id: ID!
    email: String!
    source: SourceEnum!
}

input SubscribeInput {
    email: String!
    source: SourceEnum! = HOME_PAGE
}

type Mutation {
    subscribe(input: SubscribeInput!): Subscription!
}

type Query {
    subscriptions: [Subscription]
}`;

export default typeDefs;
