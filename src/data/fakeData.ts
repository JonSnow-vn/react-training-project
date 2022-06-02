import { User } from "../model/User";

let user1: User = {
    id: 1,
    fullName: 'doan1',
    age: 20,
    sex: 'male',
    email: '123@gmail.com',
};
let user2: User = {
    id: 2,
    fullName: 'doan2',
    age: 20,
    sex: 'female',
    email: '123@gmail.com',
};
let user3: User = {
    id: 3,
    fullName: 'doan3',
    age: 20,
    sex: 'male',
    email: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
};

export const initListUser = [user1, user2, user3];