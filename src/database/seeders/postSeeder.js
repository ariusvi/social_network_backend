import Post from "../../models/Post.js";
import User from "../../models/User.js";
import { fakerES as faker } from '@faker-js/faker';



const seedPosts = async () => {
    const posts = [];
    const users = await User.find({});

    for (let i = 0; i < 8; i++) {
        const randomUserIndex = Math.floor(Math.random() * users.length);
        const post = {
            title: faker.lorem.lines({ min: 1, max: 1 }),
            text: faker.lorem.lines({ min: 1, max: 5 }),
            author: users[randomUserIndex]._id,
        };
        posts.push(post);
    } 
    await Post.create(posts)
}

export default seedPosts;