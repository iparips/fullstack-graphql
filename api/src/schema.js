const {gql} = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    
    type User {
        id: ID!
        username: String!
        shoes: [Shoe]!
        pets: [Pet]!
    }

    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
        image: String
        owner: User
    }

    type Shoe {
        brand: String!
        size: Int!
        user: User!
    }
    
    input UserInput {
        id: String
    }
    
    input PetInput {
        name: String
        type: String
    }
    
    input ShoesInput {
        brand: String
        size: Int
    }
    
    input NewShoeInput {
        brand: String!
        size: Int!
    }
    
    input NewPetInput {
        name: String!
        type: String!
    }
    
    type Query {
        me: User!
        pets(input: PetInput!): [Pet]!
        pet(input: PetInput!): Pet
        shoes(input: ShoesInput!): [Shoe]!
    }
    
    type Mutation {
        createShoe(input: NewShoeInput!): Shoe!      
        createPet(input: NewPetInput!): Pet!      
    }
`;

module.exports = typeDefs
