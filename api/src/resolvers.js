/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets: (parentResolverValue, {input}, {models}) => {
      return models.Pet.findMany({})
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
  Pet: {
    image: (resolvedParentValue) => {
      console.log("resolvedParentValue: ", resolvedParentValue);
      return 'image'
    }
  }
}
