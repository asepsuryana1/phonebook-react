var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
//var GraphQLInteger = require('graphql').GraphQLInteger;

// User Type
exports.userType = new GraphQLObjectType({
  name: 'users',
  fields: function () {
    return {
      ID: {
        type: new GraphQLNonNull(GraphQLID)
      },
      nama: {
        type: GraphQLString
      },
      phone: {
        type: GraphQLString
      }
    }
  }
});