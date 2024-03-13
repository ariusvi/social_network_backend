import User from "../../models/User.js";
import { fakerES as faker } from '@faker-js/faker';
import bcrypt from "bcrypt";

const seedUsers = async () => {
    const users = [
        {
            name: "user",
            email: "user@user.com",
            password: await bcrypt.hash("123456", 8),
            role: "user"
        },
        {
            name: "admin",
            email: "admin@admin.com",
            password: await bcrypt.hash("123456", 8),
            role: "admin"
        },
        {
            name: "superadmin",
            email: "superadmin@superadmin.com",
            password: await bcrypt.hash("123456", 8),
            role: "super_admin"
        },
    ];

    for (let i = 0; i < 8; i++) {
        const user = {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: await bcrypt.hash("123456", 8),
            role: "user"
        };
        users.push(user);
    } 
    await User.create(users)
}

export default seedUsers;