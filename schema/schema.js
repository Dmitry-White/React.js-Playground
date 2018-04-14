const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const users = [
    { id: '23', firstName: 'Bill', age: 20 },
    { id: '47', firstName: 'Samantha', age: 21 },
];

const UserType = new GraphQLObjectType({
    name: 'User',
    field: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    field: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } }
            resolve(parentValue, args) {
                return _.find(users, { id: args.id });
            }
        }
    }
});
