const {ApolloServer} = require("apollo-server");

const gql = require('graphql-tag')

const typeDefs = gql`
#    type User {
#        email: String!
#        avatar: String
#        friends: [User]!        
#    }
    
#    type Query {
#        user: User!
#    }
`
// Resolver's job is to return something that looks like the type specified in a query
const resolvers = {
  Query: {
    user: () => ({
      // email: 'yoda@masters.com',
      avatar: 'http://yoda.org',
      friends: []
    })
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(4000).then(() => console.log("On port 4000"))
