import { Client, Account, ID } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e6b2d26563ee070b06');
const account = new Account(client);

// Register User
account.create(
    ID.unique(),
    'me@example.com',
    'password',
    'Jane Doe'
).then(response => {
    console.log(response);
}, error => {
    console.log(error);
});