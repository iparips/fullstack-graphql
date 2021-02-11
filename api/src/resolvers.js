/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */
const user = {
  "id": "jBWMVGjm50l6LGwepDoty",
  "username": "frontendmaster"
}

const shoes = [{
  brand: 'nike',
  size: 12,
  user: 1
},
  {
    brand: 'adidas',
    size: 13,
    user: 2
  }]

module.exports = {
  Query: {
    pets: (parentResolverValue, {input}, context) => {
      return context.models.Pet.findMany({type: input.type})
    },
    pet: (_, {input}, context) => {
      return context.models.Pet.findOne({name: input.name})
    },
    shoes: (_, {input}) => {
      return shoes.filter(item => item.brand === input.brand)
    }
  },
  Mutation: {
    createShoe: (parentResolverValue, {input}, ctx) => {
      return input
    },
    createPet: (_, {input}, ctx) => {
      return ctx.models.Pet.create(input)
    }
  },
  Pet: {
    image: (resolvedParentValue) => {
      return 'image'
    },
    owner: (parent, {input}, ctx) =>  {
      return ctx.models.User.findOne({ id: parent.owner} )
    }
  },
  User: {
    shoes: () => shoes
  },
  Shoe: {
    user(shoe) {
      return user
    }
  }
}
