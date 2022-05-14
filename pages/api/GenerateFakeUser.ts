import { faker } from '@faker-js/faker'

export const GeneratorFakeUser = () => {
  const randomName = []
  try {
    for (let i = 0; i < 10; i++) {
      randomName.push({
        name: faker.name.findName(),
        image: faker.image.avatar(),
      })
    }
  } catch (err) {
    console.log('Error 🤕', err)
  }
  return randomName
}
