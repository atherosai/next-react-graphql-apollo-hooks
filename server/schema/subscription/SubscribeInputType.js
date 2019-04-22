const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');
const { GraphQLEmail } = require('graphql-custom-types');

const subsribeInput = new GraphQLInputObjectType({
  name: 'SubsribeInput',
  fields: () => ({
    email: {
      type: new GraphQLNonNull(GraphQLEmail)
    }
  })
});

module.exports = subsribeInput;
