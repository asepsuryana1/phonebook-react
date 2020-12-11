var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInteger = require('graphql').GraphQLInteger
var UserType = require('../types/user');
var services = require('../../services');

exports.update = {
  type: UserType.userType,
  args: {
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nama: {
      type: new GraphQLNonNull(GraphQLString),
    },
    id: {
      type: new GraphQLNonNull(GraphQLInteger),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLInteger),
    }
  },
  resolve(root, params) {
    return services.updateUser(params)
  }
}