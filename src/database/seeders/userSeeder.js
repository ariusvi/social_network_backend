import User from "../../models/User.js";
import { fakerES as faker } from '@faker-js/faker';
import bcrypt from "bcrypt";

const seedUsers = async () => {
    const users = [
        {
            nickname: "user",
            email: "user@user.com",
            password: await bcrypt.hash("123456", 8),
            avatar: "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg",
            role: "user"
        },
        {
            nickname: "admin",
            email: "admin@admin.com",
            password: await bcrypt.hash("123456", 8),
            avatar: "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg",
            role: "admin"
        },
        {
            nickname: "superadmin",
            email: "superadmin@superadmin.com",
            password: await bcrypt.hash("123456", 8),
            avatar: "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg",
            role: "super_admin"
        },
        {
            nickname: "BitterPro",
            email: "astarion@email.com",
            password: await bcrypt.hash("123456", 8),
            avatar: "https://lh6.googleusercontent.com/proxy/w4ukEl2VVamfAFsGBC226uqJQy3KtK6vqQFOvNXcBPGI7ewIkUwoERlIaaa-ro8Rb4OgzMGHRt80CPL6AsogOdfMTdnxwbEcgega2auvR3rvsMIP2EbzkNdm-A",
            role: "user",
            biography: "Easy now darling. You've got this, and I've got you. #BitterPro #vampire #living4ever #weirdosHater"
        },
        {
            nickname: "BBQgirl",
            email: "karlach@email.com",
            password: await bcrypt.hash("123456", 8),
            avatar: "https://i.blogs.es/a305c2/portada-karlach-y-wyll/500_333.jpeg",
            user: "user",
            biography: "This girl is on fireeee #mechanicalHeart #softGirl"
        },
        {
            nickname: "Shadowheart",
            email: "shadowheart@email.com",
            password: await bcrypt.hash("123456", 8),
            avatar: "https://lh5.googleusercontent.com/proxy/-2L-kqssReQfOIlZOicZYsBnUz2AlL0o9Ri-j1Iz_A17ow9fiz8uM9q1JcEDTcJPbyV1Bz14pZ8y_wrcHLYs6YVjtsnW8ZFAK-LS2HSpCXNQX8bxdDXsKg4AMUdXJA",
            user: "user",
            biography: "Everyone has to suffer - It's a fact of life #ShadowHeart #darkness #light #shar"
        },
        {
            nickname: "Volo",
            email:"volo@email.com",
            password: await bcrypt.hash("123456", 8),
            avatar: "https://64.media.tumblr.com/cd2fee4229bcb9b6708c5574104e4998/9307de7d05ac3dff-e3/s540x810/dad163c27dad66ee9764eec59211fe199df8f464.gifv",
            user: "user",
            biography: "I've traveled the length and breadth of Faerûn, and there's always something new. #bestBard #ElmisterHater",
        }
    ];

    for (let i = 0; i < 8; i++) {
        const user = {
            nickname: faker.person.firstName(),
            email: faker.internet.email(),
            password: await bcrypt.hash("123456", 8),
            biography: faker.person.bio(),
            avatar: "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg",
            role: "user"
        };
        users.push(user);
    } 
    await User.create(users)
}

export default seedUsers;