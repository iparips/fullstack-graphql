const nanoid = require('nanoid')

const createUserModel = db => {
  return {
    findOne(filter) {
      return db.get('user')
        .filter(filter)
        .first()
        .value()
    },

    create(user) {
      const newUser = {id: nanoid(), createdAt: Date.now(), ...user}
      db.set('user', newUser)
        .write()

      return newUser
    }
  }
}

module.exports = createUserModel
