const mongoose = require('mongoose')


if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
} 

const password = process.argv[2]


const url =
`mongodb+srv://fullstack:${password}@cluster0.mf684.mongodb.net/Phonebook-App?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

// const person = new Person({
//   name: "Jamal Coleman",
//   number: "123409872",
// })

// person.save().then(result => {
//   console.log('person saved!')
//   mongoose.connection.close()
// })

// Person.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })

if (process.argv.length === 5) {
  const name = process.argv[3]
const number = process.argv[4]
  const person = new Person({
    name:  `${name}`,
    number: `${number}`,
  })
  
  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else if (process.argv.length === 3) {
  Person.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
}




