import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const subsribeInput = new GraphQLInputObjectType({
  name: 'SubsribeInput',
  fields: () => ({
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});

export default subsribeInput;
