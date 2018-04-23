const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        user: {
            type: UserType,
            resolve() {
                return null
            }
        }
    })
});

module.exports = RootQueryType;
