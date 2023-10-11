// const Tarantool = require('tarantool-driver');
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient();



// const tarantoolConnection = new Tarantool({
//   host: process.env.TRHOST,
//   port: process.env.TRPORT,
//   username: process.env.TRUSERNAME,
//   password: process.env.TRPASSWORD,
//   beforeReserve: 1
// });


// connection.sql(`SELECT "id" FROM "my_space"`)
//     .then((value: Response) => {
//         console.log('values', value);
//     })
//     .catch((error: Error) => {
//         console.log('error', error);
        
//     })


export {
    db,
    // tarantoolConnection
}