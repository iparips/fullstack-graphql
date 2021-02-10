/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets: (parentResolverValue, {type}, {models}) => {
      return models.Pet.findMany({})
    }
  },
  Pet: {
    image: (resolvedParentValue) => {
      console.log("resolvedParentValue: ", resolvedParentValue);
      return 'image'
    }
  }
}
