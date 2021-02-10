/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets: (parentResolverValue, {input}, context) => {
      return context.models.Pet.findMany({type: input.type})
    },
    pet: (_, {input}, context) => {
      return context.models.Pet.findOne({name: input.name})
    },
    shoes: (parentResolvedValue, {input}) => {
      return [{
          brand: 'nike',
          size: 12
        },
        {
          brand: 'adidas',
          size: 13
        }].filter(item => item.brand === input.brand)
    }
  },
  Mutation: {
    createShoe: (parentResolverValue, {input}, ctx) => {
      return input
    }
  },
  Pet: {
    image: (resolvedParentValue) => {
      console.log("resolvedParentValue: ", resolvedParentValue);
      return 'image'
    }
  }
}
