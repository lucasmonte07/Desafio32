import express from 'express'
import compression from 'express-compression'
import { faker } from '@faker-js/faker';
import CustomError from './helpers/CustomError.js'

const app = express()

app.use(compression({
    brotli: { enabled: true, zlib: {} }
}))

app.get("/mockingproducts", (req, res) => {

    const users = []

    const createRandomUser = () => {
        return {
            title: faker.commerce.productName(),
            price: faker.commerce.price(),
            stock: faker.random.numeric(1),
            id: faker.database.mongodbObjectId(),
            image: faker.image.image()            
            
            /*
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            img: faker.image.food(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            */
        };
    }
    
    for (let i = 0; i < 100; i++) {
        users.push(createRandomUser());
    }
    
    res.send(users)
})

app.listen(4000, () => {
    console.log("Server on port 4000")
})

